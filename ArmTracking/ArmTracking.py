import cv2
import mediapipe as mp
import numpy as np
import math
import time

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

highest_angle = 0
start_time = None
hold_duration = 3
angle_threshold = 5
cap = cv2.VideoCapture(0)

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
            start_time = time.time()
        if highest_angle - arm_angle <= angle_threshold:
            if start_time and (time.time() - start_time >= hold_duration):
                print(f"ROM: {int(highest_angle)}° from starting position.")
                break
        else:
            start_time = None
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
