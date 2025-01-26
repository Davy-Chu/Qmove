import React, { useState } from "react";

export default function NewInjuryModal({ onClose, onSave }) {
    const [injury, setInjury] = useState(""); // State to store the selected injury

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (injury) {
            onSave(injury); // Pass the selected injury to the parent component
            onClose(); // Close the modal
        } else {
            alert("Please select an injury type before submitting.");
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="new-injury modal-container"
                onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing the modal
            >
                <div className="modal-header">
                    <h1>New Injury</h1>
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="injury-type">What injury do you have?</label>
                    <select
                        id="injury-type"
                        name="injury-type"
                        value={injury}
                        onChange={(e) => setInjury(e.target.value)}
                        className="dropdown"
                    >
                        <option value="" disabled>
                            Select an injury
                        </option>
                        <option value="Shoulder Problems">Shoulder Problems</option>
                        <option value="Knee Problems">Knee Problems</option>
                        <option value="Elbow Problems">Elbow Problems</option>
                    </select>

                    <button type="submit" className="submit-button">
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
}
