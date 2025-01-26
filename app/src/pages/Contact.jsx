import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <div>
            <div>
                {/* Navbar */}
                <Navbar />
            </div>
            <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#1c1c1e", minHeight: "100vh" }}>
                {/* Contact Header */}
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.2rem", color: "white", letterSpacing: "1px", marginBottom: "5px" }}>
                        STUDENTS PHYSIO GROUP
                    </h2>
                    <h1 style={{ fontSize: "2.5rem", color: "white", marginBottom: "20px" }}>CONTACT US</h1>
                </div>

                {/* Main Content */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    gap: "40px"
                }}>
                    {/* Online Inquiry Form */}
                    <div style={{ flex: "1", backgroundColor: "#FFFFF0", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                        <h3 style={{ fontSize: "1.2rem", color: "#000", marginBottom: "20px", textAlign: "center" }}>
                            ONLINE INQUIRY
                        </h3>
                        <form>
                            <input
                                type="text"
                                placeholder="Name"
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                style={inputStyle}
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                style={inputStyle}
                            />
                            <select style={{ ...inputStyle}}>
                                <option>Select An Interest</option>
                                <option>General Inquiry</option>
                                <option>Professional Implementation</option>
                                <option>Other</option>
                            </select>
                            <textarea
                                placeholder="Message"
                                rows="4"
                                style={{
                                    ...inputStyle,
                                    height: "100px",
                                    resize: "none", // Prevent resizing
                                    backgroundColor: "#f0f0f0", // Light gray background
                                }}
                            />
                            <button className="submit-inquiry" style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "12px",
                                cursor: "pointer",
                                width: "100%",
                                marginTop: "15px",
                                transition: "background-color 0.3s ease"
                            }}>
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div style={{ flex: "1", padding: "20px", textAlign: "center" }}>
                        <h3 style={{ fontSize: "1.2rem", color: "white", marginBottom: "20px", textAlign: "center" }}>
                            CONTACT DETAILS
                        </h3>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            students@qmove.com <br />
                            (123) 465-7890
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Wilfrid Laurier University</strong> <br />
                            75 University Avenue West <br />
                            Waterloo, ON N2L 3C5
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Carleton University</strong> <br />
                            1125 Colonel By Dr. <br />
                            Ottawa, ON K1S 5B6
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Queen's University</strong> <br />
                            99 University Ave. <br />
                            Kingston, ON K7L 3N6
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    display: "block",
    width: "85%", // Consistent width for all inputs
    maxWidth: "425px", // Uniform maximum width
    padding: "12px", // Consistent padding
    margin: "10px auto", // Centers the fields
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.5", // Improves readability
    backgroundColor: "#f5f5f5", // Light gray background
};


