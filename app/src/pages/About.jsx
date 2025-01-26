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
                    Welcome to our application! This project combines React, Streamlit, and a Python backend to provide seamless analytics and insights.
                </p>

                {/* Containers for additional information */}
                <div className="stats-container" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                    {/* First Panel */}
                    <div className="stats-panel" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "300px", backgroundColor: "#FFFFF0" }}>
                        <h3 className="stats-title" style={{ marginBottom: "10px" }}>Our Mission</h3>
                        <p>
                            To create a user-friendly platform for tracking and visualizing data, empowering users to make data-driven decisions.
                        </p>
                    </div>

                    {/* Second Panel */}
                    <div className="stats-panel" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "300px", backgroundColor: "#FFFFF0" }}>
                        <h3 className="stats-title" style={{ marginBottom: "10px" }}>Our Technology</h3>
                        <p>
                            Built with React for the frontend, Streamlit for analytics, and Python for backend services, delivering robust performance and interactivity.
                        </p>
                    </div>
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
