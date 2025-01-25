import cv2
import mediapipe as mp
import numpy as np
import math

# Initialize Mediapipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

# Helper function to calculate the angle between three points
def calculate_angle(a, b, c):
    a = np.array(a)  # Point A
    b = np.array(b)  # Point B (vertex)
    c = np.array(c)  # Point C
    
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    
    if angle > 180.0:
        angle = 360.0 - angle
        
    return angle

# Start video capture
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    # Convert frame to RGB for Mediapipe
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False
    results = pose.process(image)

    # Convert back to BGR for OpenCV
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    
    if results.pose_landmarks:
        landmarks = results.pose_landmarks.landmark

        # Extract relevant landmarks
        right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, 
                          landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
        right_hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, 
                     landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
        right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, 
                       landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]

        # Calculate the angle between the torso and the arm
        arm_angle = calculate_angle(right_hip, right_shoulder, right_wrist)

        # Display the angle on the frame
        cv2.putText(image, f'Arm Angle: {int(arm_angle)} deg', (50, 50), 
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

        # Draw the landmarks for visualization
        h, w, _ = image.shape
        for point in [right_shoulder, right_hip, right_wrist]:
            cv2.circle(image, (int(point[0] * w), int(point[1] * h)), 10, (0, 255, 0), -1)

    # Display the frame
    cv2.imshow("Arm Angle Tracker", image)

    # Exit on ESC key
    key = cv2.waitKey(10)
    if key == 27:  # ESC key has ASCII value 27
        print("Exiting program.")
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
