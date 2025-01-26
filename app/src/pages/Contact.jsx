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
                        MICHELLE PAIS GROUP
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
                            <select style={{ ...inputStyle, padding: "10px" }}>
                                <option>Select An Interest</option>
                                <option>General Inquiry</option>
                                <option>Property Listing</option>
                                <option>Other</option>
                            </select>
                            {/* Static, uneditable textarea */}
                            <textarea
                                placeholder="Message"
                                rows="4"
                                readOnly
                                style={{
                                    ...inputStyle,
                                    height: "100px",
                                    resize: "none", // Prevent resizing
                                    backgroundColor: "#f0f0f0", // Light gray background
                                    cursor: "not-allowed" // Indicate it's uneditable
                                }}
                            />
                            <button style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                width: "100%",
                                marginTop: "15px"
                            }}>
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div style={{ flex: "1", padding: "20px" }}>
                        <h3 style={{ fontSize: "1.2rem", color: "white", marginBottom: "20px", textAlign: "center" }}>
                            CONTACT DETAILS
                        </h3>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            michelle@signaturerealtynj.com <br />
                            (908) 686-1200
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Westfield</strong> <br />
                            233 North Avenue E. <br />
                            Westfield, NJ 07090
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Summit</strong> <br />
                            357 Springfield Ave. <br />
                            Short Hills, NJ 07901
                        </p>
                        <p style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.5", color: "white" }}>
                            <strong>Short Hills Office</strong> <br />
                            549 Millburn Ave. <br />
                            Short Hills, NJ 07078
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    display: "block",
    width: "85%", // Slightly reduced width for better spacing
    maxWidth: "425px", // Ensures consistent width
    padding: "12px", // Reduced padding for better fit
    margin: "10px auto", // Centers the input fields and adds spacing
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.5", // Improves readability
    backgroundColor: "#f5f5f5", // Light gray background for inputs
};


