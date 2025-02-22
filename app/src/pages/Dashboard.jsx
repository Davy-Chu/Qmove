import Navbar from '../components/Navbar';
import Daycard from '../components/Daycard';
import NewInjuryModal from '../components/NewInjuryModal';
import axios from "axios";
import { useState, useEffect } from 'react';
export default function Dashboard() {
    // Example data - replace with your actual data
    
    const [dayCount, setDayCount] = useState(1);
    const [cards, setCards] = useState([
        { day: '16', value: '87', description: 'Good recovery progress noted.', image: 'Qhacks.jpg' },
        { day: '15', value: '83', description: 'Slight improvement from the previous day.', image: 'Qhacks.jpg' },
        { day: '14', value: '82', description: 'Consistent performance overall.', image: 'Qhacks.jpg' },
        { day: '13', value: '83', description: 'Good stability in range of motion.', image: 'Qhacks.jpg' },
        { day: '12', value: '78', description: 'Minor stiffness observed.', image: 'Qhacks.jpg' },
        { day: '11', value: '77', description: 'Initial recovery phase.', image: 'Qhacks.jpg' },
    ]);
    const [buttonText, setButtonText] = useState("Add Entry")
    const [injuryModal, setInjuryModal] = useState(false);
    const [selectedInjury, setSelectedInjury] = useState("");
    useEffect (() => {
        // setTimeout(() => {
            axios.get("http://localhost:5000/get_data").then((res) => {
                console.log(res.data);
                let processedData = res.data.map((raw) => {
                    return {day: raw.day, value: raw.rom, description:raw.description, image: raw.image}
                })
                
                setCards(processedData);
                console.log(processedData)
            })
        // },1000)
    }, [])
    const displayInjuryModal = () => {
        setInjuryModal(!injuryModal);
        console.log(injuryModal);
    }
    const handleInjurySave = (injury) => {
        setSelectedInjury(injury); // Save the selected injury
        setInjuryModal(false); // Close the modal
        console.log("Selected Injury:", injury); // Log the injury
    };
    const addEntry = () => {
        axios.get('http://localhost:5000/get_rom').then((res) => {
                console.log(res.data);
                console.log(cards[0])
                const img = res.data.image.split("\\")[1];
                // console.log(res.data.image.split('/'));
                console.log(img)
                if (cards[0].day === dayCount) {
                    setCards(cards => [{ day: res.data.day, value: res.data.rom, image: img }, ...cards.slice(1, -1)]);
                } else {
                    setCards(cards => [{ day: res.data.day, value: res.data.rom, image: img }, ...cards]);
                    // setDayCount(dayCount + 1);
                    console.log(cards);
                    if (cards[0].day === 0) {
                        setButtonText("Redo Entry");
                    }
                }
            })
    }
    return (
        <div className="dashboard-page">
            <Navbar />            {injuryModal && (
                <NewInjuryModal
                    onClose={() => setInjuryModal(false)} // Close modal
                    onSave={handleInjurySave} // Save injury
                />
            )}
            {dayCount <= 0 && (
                <div className="empty-state">
                    <div className="empty-state-content">
                        <img
                            src="/genki.png"
                            alt="No data"
                            className="empty-state-image"
                        />
                        <h2 className="empty-state-title">No current injuries</h2>
                        <p className="empty-state-message">
                            Have a new injury? Add the details below!
                        </p>
                        <button
                            className="empty-state-button"
                            onClick={() => setInjuryModal(true)}
                        >
                            Add new entry
                        </button>
                    </div>
                </div>
            )}
            {dayCount > 0 && (
                <div className="dashboard-container">
                    <div className="days-header">
                        <h2>Last {dayCount} Days...</h2>
                    </div>
                    <div className="add-entry-button-container">
                        <button
                            className="add-entry-button"
                            onClick={addEntry}
                        >
                            Add entry
                        </button>
                    </div>
                    <div className="cards-grid">
                        {cards.map((card, index) => (
                            <Daycard
                                key={index}
                                title={card.day}
                                value={card.value}
                                image={card.image}
                                description={card.description} // Pass description here
                            />
                        ))}
                    </div>
{/*                 <div className="stats-container">
                        <div className="stats-panel">
                            <h3 className="stats-title">Usage Statistics</h3>
                            <div className="chart-container">
                                <p className="placeholder-text">Chart placeholder</p>
                            </div>
                        </div>
                        <div className="stats-panel">
                            <h3 className="stats-title">Performance Metrics</h3>
                            <div className="chart-container">
                                <p className="placeholder-text">Chart placeholder</p>
                            </div>
                        </div>
                    </div>*/}
                    <div className="streamlit-container">
                        <iframe
                            src="http://localhost:8501" // Replace with your Streamlit URL
                            title="Streamlit App"
                            scrolling="no" // Disable iframe scrolling
                            style={{
                                width: "100%",
                                height: "100vh",
                                border: "none",
                                marginTop: "20px",
                            }}
                        />
                    </div>
                </div>
            )}
            {selectedInjury && (
                <div className="injury-summary">
                    <h3>Selected Injury: {selectedInjury}</h3>
                </div>
            )}
        </div>
    );
}
