import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables for MongoDB connection
load_dotenv()
MONGODB_URI = os.getenv("MONGODB_CONNECTION_STRING")

# Connect to MongoDB
client = MongoClient(MONGODB_URI)
db = client["rehab_data"]
collection = db["rom_data"]
try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
print(os.getenv("MONGODB_URI"))
print("Collections in rehab_data:", db.list_collection_names())  # Check collections

# Fetch data from MongoDB
def fetch_data_from_mongodb():
    data = []
    cursor = collection.find({})
    for doc in cursor:
        print(doc)
    for document in collection.find({}, {"_id": 0, "day": 1, "rom": 1, "description": 1}):
        data.append({
            "day": document.get("day"),
            "rom": document.get("rom"),
            "description": document.get("description"),
        })
    return pd.DataFrame(data)  # Convert to Pandas DataFrame

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
data["day_index"] = data["day"].str.extract(r"(\d+)").astype(int)  # Extract day number for sorting
data = data.sort_values(by="day_index")

# Compute ROM Gained
data["rom_gained"] = data["rom"].fillna(0)  # Use the ROM value for Day 1 instead of 0

# Interpolate missing values for smoother plotting
data["rom_gained_interpolated"] = data["rom_gained"].interpolate(method="linear")

# Use wide layout for more space
st.set_page_config(layout="wide", page_title="ROM Tracker (Matplotlib)")

# Get days and ROM values
days = data["day"].tolist()
rom_gained = data["rom_gained"].tolist()
rom_gained_interpolated = data["rom_gained_interpolated"].tolist()

# Initialize state to track selected day
if "selected_day" not in st.session_state:
    st.session_state.selected_day = days[0]  # Default to the first day

# Inject CSS to animate buttons
st.markdown(
    """
    <style>
    /* Set the background of the whole page to black */
    body {
        background-color: black;
        color: white;
    }

    /* Button styling */
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

    /* Keep the background of the graph area unaffected */
    .streamlit-expanderHeader {
        background-color: transparent;
    }

    /* Make sure the graph background remains default (white) */
    .stPlotlyChart, .stMatplotlib {
        background-color: transparent;
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
            day_number = f"Day {j + 1}"  # Create a label like "Day 1", "Day 2", etc.
            if cols[j].button(day_number, key=day_number):  # Use the new label as button text
                st.session_state.selected_day = day  # Update the selected day

    st.write(f"**Selected Day:** {st.session_state.selected_day}")

with col_right:
    st.title("ROM Gained Over Time")

    # Create a Matplotlib figure
    fig, ax = plt.subplots(figsize=(8, 4))

    # Plot ROM gained over time with interpolated data
    ax.plot(
        days,
        rom_gained_interpolated,
        marker="o",
        label="ROM Gained Over Time (Interpolated)",
        color="blue",
    )

    # Highlight the selected day
    selected_day = st.session_state.selected_day
    selected_rom_gained = data.loc[data["day"] == selected_day, "rom_gained"].iloc[0]
    selected_day_index = days.index(selected_day)  # Day index (1-based)

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
    ax.set_xticks(range(len(days)))  # Set ticks based on the number of days
    ax.set_xticklabels(days, rotation=45, ha="right", fontsize=8)  # Show the day labels on x-axis

    ax.set_xlabel("Day")
    ax.set_ylabel("ROM Gained (degrees)")
    ax.set_title("ROM Gained Over Time")
    ax.grid(True)
    ax.legend()

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
