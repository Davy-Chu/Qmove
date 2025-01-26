import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables for MongoDB connection
load_dotenv()
MONGODB_URI = os.getenv("MONGODB_CONNECTION_STRING")

# Connect to MongoDB
client = MongoClient(MONGODB_URI)
db = client["your_database_name"]  # Replace with your database name
collection = db["rom_data"]  # Replace with your collection name

# Fetch data from MongoDB
def fetch_data_from_mongodb():
    data = list(collection.find({}, {"_id": 0}))  # Fetch all documents except `_id`
    return pd.DataFrame(data)

# Load data into a Pandas DataFrame
data = fetch_data_from_mongodb()

# Ensure data exists
if data.empty:
    st.error("No data found in MongoDB. Please add records to `rom_data` collection.")
    st.stop()

# Ensure required fields exist
if not all(col in data.columns for col in ["day", "rom", "description"]):
    st.error("MongoDB data is missing required fields (`day`, `rom`, `description`).")
    st.stop()

# Sort data by day
data["day_index"] = data["day"].str.extract(r'(\d+)').astype(int)  # Extract day number for sorting
data = data.sort_values(by="day_index")

# Compute ROM Gained
data["rom_gained"] = data["rom"].diff().fillna(0)  # Compute ROM gained between consecutive days

# Use wide layout for more space
st.set_page_config(layout="wide", page_title="ROM Tracker (Matplotlib)")

# Get days and ROM values
days = data["day"].tolist()
rom_gained = data["rom_gained"].tolist()

# Initialize state to track selected day
if "selected_day" not in st.session_state:
    st.session_state.selected_day = days[0]  # Default to the first day

# Inject CSS to animate buttons
st.markdown(
    """
    <style>
    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 2px;
        cursor: pointer;
        border-radius: 5px;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
    </style>
    """,
    unsafe_allow_html=True,
)

# Create two columns: left (1.5 part) and right (1.5 part)
col_left, col_right = st.columns([1.5, 1.5])

with col_left:
    st.title("Days")
    st.write("Click a day to view its data:")

    # Display days as a grid of buttons (7 per row)
    for i in range(0, len(days), 7):  # Iterate in steps of 7
        cols = st.columns(7)  # Create 7 columns for buttons
        for j, day in enumerate(days[i : i + 7]):  # Loop through the 7 days for this row
            if cols[j].button(day, key=day):
                st.session_state.selected_day = day  # Update the selected day

    st.write(f"**Selected Day:** {st.session_state.selected_day}")

with col_right:
    st.title("ROM Gained Over Time")

    # Create a Matplotlib figure
    fig, ax = plt.subplots(figsize=(8, 4))

    # Plot ROM gained over time with a line + markers
    ax.plot(
        days,
        rom_gained,
        marker="o",
        label="ROM Gained Over Time",
        color="blue",
    )

    # Highlight the selected day
    selected_day = st.session_state.selected_day
    selected_rom_gained = data.loc[data["day"] == selected_day, "rom_gained"].iloc[0]
    selected_day_index = days.index(selected_day) + 1  # Day index (1-based)

    ax.scatter(selected_day_index, selected_rom_gained, color="red", s=100, zorder=3)
    ax.text(
        selected_day_index,
        selected_rom_gained,
        f"{selected_rom_gained}°",
        color="red",
        ha="left",
        va="bottom",
        fontsize=10,
    )

    # Adjust the x-axis to display "Day 1", "Day 2", etc.
    ax.set_xticks(range(1, len(days) + 1))
    ax.set_xticklabels(days, rotation=45, ha="right", fontsize=8)

    ax.set_xlabel("Day")
    ax.set_ylabel("ROM Gained (degrees)")
    ax.set_title("ROM Gained Over Time")
    ax.grid(True)
    ax.legend()

    # Animation function
    def update(frame):
        ax.lines[0].set_data(days[: frame + 1], rom_gained[: frame + 1])
        return ax.lines

    ani = FuncAnimation(fig, update, frames=len(days), interval=200, repeat=False)

    # Render the Matplotlib figure in Streamlit
    st.pyplot(fig)

    # Display description below the graph
    selected_description = data.loc[data["day"] == selected_day, "description"].iloc[0]
    st.markdown(
        f"""
    - **Selected Day:** {selected_day}
    - **ROM Gained on Selected Day:** {selected_rom_gained}°
    - **Description:** {selected_description}
    
    This graph shows the range of motion (ROM) gained each day during rehabilitation. 
    Use this visualization to track your daily progress. On **{selected_day}**, 
    you gained **{selected_rom_gained} degrees**, showing how your therapy efforts have paid off.
    """
    )
