import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import random

# Use wide layout for more space
st.set_page_config(layout="wide", page_title="ROM Tracker (Matplotlib)")

# Generate mock data: Days and random ROM gained
days = [f"Day {i}" for i in range(1, 31)]  # Days 1 through 30
rom_gained = [random.randint(5, 25) for _ in days]  # Example daily ROM gained
df = pd.DataFrame({"Day": days, "ROM Gained": rom_gained})

# Initialize state to track selected day
if "selected_day" not in st.session_state:
    st.session_state.selected_day = days[0]  # Default to "Day 1"

# Create two columns: left (1 part) and right (2 parts)
col_left, col_right = st.columns([1, 2])

with col_left:
    st.title("Days")
    st.write("Click a day to view its data:")

    # Display days as clickable buttons
    for day in days:
        if st.button(day):
            st.session_state.selected_day = day  # Update the selected day

    st.write(f"**Selected Day:** {st.session_state.selected_day}")

with col_right:
    st.title("ROM Over Time (Matplotlib)")

    # Create a Matplotlib figure
    fig, ax = plt.subplots(figsize=(8, 4))

    # Plot all days with a line + markers
    ax.plot(
        df["Day"], 
        df["ROM Gained"], 
        marker="o", 
        label="Daily ROM Gained"
    )

    # Highlight the selected day
    selected_rom = df.loc[df["Day"] == st.session_state.selected_day, "ROM Gained"].iloc[0]
    selected_day_index = days.index(st.session_state.selected_day) + 1  # Day index (1-based)
    ax.scatter(selected_day_index, selected_rom, color="red", s=100, zorder=3)
    ax.text(selected_day_index, selected_rom, f"{selected_rom}°", color="red",
            ha="left", va="bottom", fontsize=10)

    # Adjust the x-axis to display "Day 1", "Day 2", etc.
    ax.set_xticks(range(1, len(days) + 1))
    ax.set_xticklabels(days, rotation=45, ha="right", fontsize=8)

    ax.set_xlabel("Day")
    ax.set_ylabel("ROM Gained (degrees)")
    ax.set_title("Daily ROM Gain")
    ax.grid(True)
    ax.legend()

    # Render the Matplotlib figure in Streamlit
    st.pyplot(fig)

    st.markdown("### Database Information")
    # Placeholder data for demonstration;
    # replace this with a real query result once your DB is set up.
    db_data = {
        "ID": [101, 102, 103],
        "Name": ["Alice", "Bob", "Charlie"],
        "Notes": ["Shoulder rehab", "Knee rehab", "General PT"]
    }
    db_df = pd.DataFrame(db_data)
    st.dataframe(db_df, use_container_width=True)
