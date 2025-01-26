import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
    return (
        <div>
            {/* Include the Navbar */}
            <Navbar />

            {/* About page content */}
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1 style={{ color: "white" }}>
                    About Us
                </h1>

                <p style={{ color: "white" }}>
                Our project is a rehabilitation program designed to help individuals track and reclaim their range of motion (ROM) in injured joints. Whether you’re recovering from a shoulder dislocation or any injury resulting in reduced ROM, this program is here to guide you through your recovery journey.
                </p>

                {/* Containers for additional information */}
                <div className="stats-container" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                    {/* First Panel */}
                    <div className="stats-panel" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "300px", backgroundColor: "#FFFFF0" }}>
                        <h3 className="stats-title" style={{ marginBottom: "10px" }}><strong>Features</strong></h3>
                        <p className="tech">
                        <strong>ROM Tracking</strong>: Uses OpenCV to calculate the angle and range of motion of your joint daily.<br></br><br></br>
                        <strong>AI Recommendations</strong>: A trained physiotherapist AI suggests recovery programs based on your progress.<br></br><br></br>
                        <strong>Streamlit Data Visualization</strong>: Displays clear and interactive graphs to track your rehabilitation journey.<br></br><br></br>
                        <strong>User Logins and Cloud Storage</strong>: With a secure login system and MongoDB database, individual users can create accounts, save their data, and access it across devices.
                        </p>
                    </div>

                    {/* Second Panel */}
                    <div className="stats-panel" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "300px", backgroundColor: "#FFFFF0" }}>
                        <h3 className="stats-title" style={{ marginBottom: "10px", }}><strong>Our Technology</strong></h3>
                        <p className="tech">
                        <strong>React</strong>: Frontend framework to create a responsive and user-friendly interface.<br></br><br></br>
                        <strong>Streamlit</strong>: For plotting data and visualizing the recovery journey.<br></br><br></br>
                        <strong>OpenCV</strong>: To track and calculate the ROM using camera input.<br></br><br></br>
                        <strong>Flask</strong>: Backend server to manage data flow and user authentication.<br></br><br></br>
                        <strong>MongoDB</strong>: Cloud database to securely store user information and progress.<br></br>
                        </p>
                    </div>
                </div>
                <div className='about-section'>
                    <h1 style={{ color: "white" }}>
                    How It Works
                    </h1>

                    <p style={{ color: "white", maxWidth: "600px" }}>
                    Using cutting-edge computer vision technology with OpenCV, we track the daily angle of movement in your injured joint. For example, in the case of a shoulder dislocation, the program measures how far up your arm can move daily, recording your progress in real time.<br></br><br></br>The data collected is then analyzed by a trained Physiotherapist AI, which recommends a personalized rehabilitation program tailored to your recovery. Every day, you test your maximum ROM to monitor the effectiveness of the suggested exercises.<br></br><br></br>Through Streamlit, we visualize this data, allowing you to see how much of your ROM you’ve reclaimed over time in intuitive and interactive graphs.
                    </p>
                </div>
                <div className="logo-container" style={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                width: "100%",
               }}>
                    {/* Display the logo using the public folder */}
                    <div className="logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            width="400"
                            height="300"
                        >
                            <g id="Layer1">
                                <path
                                id="shape1"
                                fillRule="evenodd"
                                className="s0"
                                d="m10 106l14 68 16-32z"
                                />
                                <path
                                id="shape2"
                                fillRule="evenodd"
                                className="s0"
                                d="m45 159l-10 12-3 8 27 1z"
                                />
                                <path
                                id="shape3"
                                fillRule="evenodd"
                                className="s0"
                                d="m26 185l-19 44 38-17 57 13-32-27-10-13z"
                                />
                                <path
                                id="shape4"
                                fillRule="evenodd"
                                className="s0"
                                d="m5 117l-2 105 18-40z"
                                />
                                <path
                                id="shape5"
                                fillRule="evenodd"
                                className="s0"
                                d="m4 236l42-16 66 12-25 42 15 60-60-37-36-34z"
                                />
                                <path
                                id="shape6"
                                fillRule="evenodd"
                                className="s0"
                                d="m116 235l-20 37 59 18-11-31z"
                                />
                                <path
                                id="shape7"
                                fillRule="evenodd"
                                className="s0"
                                d="m152 265l20 48 36-13-2-50z"
                                />
                                <path
                                id="shape8"
                                fillRule="evenodd"
                                className="s0"
                                d="m94 277l16 62 48 21-3-63z"
                                />
                                <path
                                id="shape9"
                                fillRule="evenodd"
                                className="s0"
                                d="m161 300l4 58 9.5-24.7z"
                                />
                                <path
                                id="shape10"
                                fillRule="evenodd"
                                className="s0"
                                d="m174 353l7-20 20 8z"
                                />
                                <path
                                id="shape11"
                                fillRule="evenodd"
                                className="s0"
                                d="m209 306l-2 33-29-12-2-10z"
                                />
                                <path
                                id="shape12"
                                fillRule="evenodd"
                                className="s0"
                                d="m356 185l-60 32 38 19-5 38 60-42 9-39z"
                                />
                                <path
                                id="shape13"
                                fillRule="evenodd"
                                className="s0"
                                d="m214 248l75-27 35 18-82 27z"
                                />
                                <path
                                id="shape14"
                                fillRule="evenodd"
                                className="s0"
                                d="m214 260l50 26-47 15z"
                                />
                                <path
                                id="shape15"
                                fillRule="evenodd"
                                className="s0"
                                d="m253 269l43 27 28-48z"
                                />
                                <path
                                id="shape16"
                                fillRule="evenodd"
                                className="s0"
                                d="m308 290l15-11 4-23z"
                                />
                                <path
                                id="shape17"
                                fillRule="evenodd"
                                className="s0"
                                d="m219 310v25l72-32-16-10z"
                                />
                                <path
                                id="shape18"
                                fillRule="evenodd"
                                className="s0"
                                d="m359 179l29 3-18-56z"
                                />
                                <path
                                id="shape19"
                                fillRule="evenodd"
                                className="s0"
                                d="m372 75l19 25-18 1z"
                                />
                                <path
                                id="shape20"
                                fillRule="evenodd"
                                className="s0"
                                d="m373 106l17-1 3 28-2 43-19-55z"
                                />
                                <path
                                id="shape21"
                                fillRule="evenodd"
                                className="s0"
                                d="m401 130l65 47-32 25z"
                                />
                                <path
                                id="shape22"
                                fillRule="evenodd"
                                className="s0"
                                d="m405 127l54 39-8-31-27-21z"
                                />
                                <path
                                id="shape23"
                                fillRule="evenodd"
                                className="s0"
                                d="m397 141l5-1 27 65-29 19 8-40-12-4z"
                                />
                            </g>
                        </svg>
                        </div>
                        <div style={{
                        fontFamily: "'Impact', sans-serif",
                        fontSize: "6rem",
                        marginTop: "-35px",
                        marginRight: "30px",
                        textAlign: "right", // Align text to the right
                        color:"white"
                        }}>
                        Qmove
                    </div>
                </div>

            </div>
        </div>
    );
}
