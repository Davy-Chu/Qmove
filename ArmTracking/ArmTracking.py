import os
from absl import logging
import warnings

# Suppress warnings and logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
logging.set_verbosity(logging.ERROR)
warnings.filterwarnings("ignore", category=UserWarning, module="google.protobuf")
warnings.filterwarnings("ignore", message="Secure coding is not enabled for restorable state")
warnings.filterwarnings("ignore", message="Using NORM_RECT without IMAGE_DIMENSIONS")

import cv2
import mediapipe as mp
import numpy as np
import math
import time

with warnings.catch_warnings():
    warnings.filterwarnings("ignore", message="Using NORM_RECT without IMAGE_DIMENSIONS")
    mp_pose = mp.solutions.pose
    pose = mp_pose.Pose()

def calculate_angle(a, b, c):
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360.0 - angle
    return angle

def main():
    highest_angle = 0
    hold_start_time = None
    hold_duration = 3
    angle_threshold = 10
    cap = cv2.VideoCapture(0)
    final_angle = None

    print("Position yourself. Tracking will start in 5 seconds.")
    buffer_start = time.time()
    while time.time() - buffer_start < 5:
        ret, frame = cap.read()
        if not ret:
            break
        cv2.putText(frame, f"Starting in {5 - int(time.time() - buffer_start)}...", (50, 100),
                    cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 3)
        cv2.imshow("Arm Angle Tracker", frame)
        if cv2.waitKey(10) & 0xFF == 27:
            print("Exiting during setup.")
            cap.release()
            cv2.destroyAllWindows()
            return
    print("Tracking started.")

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        results = pose.process(image)
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark
            right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,
                              landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
            right_hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x,
                         landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
            right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,
                           landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]

            arm_angle = calculate_angle(right_hip, right_shoulder, right_wrist)

            if arm_angle > highest_angle:
                highest_angle = arm_angle
                hold_start_time = time.time()

            if highest_angle - arm_angle <= angle_threshold:
                if hold_start_time and (time.time() - hold_start_time >= hold_duration):
                    final_angle = f"ROM: {int(highest_angle)}° from starting position."
                    print(final_angle)
                    break
            else:
                hold_start_time = None

            cv2.putText(image, f'Arm Angle: {int(arm_angle)} deg', (50, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)
            h, w, _ = image.shape
            for point in [right_shoulder, right_hip, right_wrist]:
                cv2.circle(image, (int(point[0] * w), int(point[1] * h)), 10, (0, 255, 0), -1)

        cv2.imshow("Arm Angle Tracker", image)
        key = cv2.waitKey(10)
        if key == 27:
            print("Exiting program (ESC).")
            break

    cap.release()
    cv2.destroyAllWindows()

    return final_angle

if __name__ == "__main__":
    result = main()
    if result:
        print(f"Final result: {result}")
