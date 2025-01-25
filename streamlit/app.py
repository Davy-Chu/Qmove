import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import random

# Use wide layout for more space
st.set_page_config(layout="wide", page_title="ROM Tracker (Matplotlib)")

# Generate mock data: Days and random ROM gained
days = list(range(1, 31))  # Days 1 through 30
rom_gained = [random.randint(5, 25) for _ in days]  # Example daily ROM gained
df = pd.DataFrame({"Day": days, "ROM Gained": rom_gained})

# Create two columns: left (1 part) and right (2 parts)
col_left, col_right = st.columns([1, 2])

with col_left:
    st.title("Days")
    # Let user select a day to highlight in the chart
    selected_day = st.radio("Select a Day:", days)
    st.write(f"Selected Day: {selected_day}")

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
    selected_rom = df.loc[df["Day"] == selected_day, "ROM Gained"].iloc[0]
    ax.scatter(selected_day, selected_rom, color="red", s=100, zorder=3)
    ax.text(selected_day, selected_rom, f"{selected_rom}°", color="red",
            ha="left", va="bottom", fontsize=10)

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
