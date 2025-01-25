import Navbar from '../components/Navbar';
import Daycard from '../components/Daycard';
import NewInjuryModal from '../components/NewInjuryModal';
import DayEntryModal from '../components/DayEntryModal';
import { useState } from 'react';
export default function Dashboard() {
    // Example data - replace with your actual data
    const card = [
        { day: '16', value: '87' },
        { day: '15', value: '83' },
        { day: '14', value: '82' },
        { day: '13', value: '83' },
        { day: '12', value: '78' },
        { day: '11', value: '77' },
    ];
    const [dayCount, setDayCount] = useState(17);
    const [cards, setCards] = useState(card);
    const [entryModal, setEntryModal] = useState(false);
    const [injuryModal, setInjuryModal] = useState(false);
    const displayEntryModal = () => {
        setEntryModal(!entryModal);
        console.log(entryModal);
    }
    return (
        <div className="dashboard-page">
            <Navbar />
            {entryModal && <DayEntryModal />}
            {injuryModal && <NewInjuryModal />}
            {dayCount <= 0 && (
                <div className="empty-state">
                <div className="empty-state-content">
                    <img 
                        src="https://placehold.co/200x200" 
                        alt="No data" 
                        className="empty-state-image"
                    />
                    <h2 className="empty-state-title">No current injuries</h2>
                    <p className="empty-state-message">
                        Have a new injury? Add the details below!
                    </p>
                    <button className="empty-state-button" onClick={displayEntryModal}>
                        Add new entry                    </button>
                </div>
            </div>
            )}
            {dayCount > 0 && (<div className="dashboard-container">

                {/* Days Counter Header */}
                <div className="days-header">
                    <h2>Last {dayCount} Days...</h2>
                </div>
                {/* Add Injury Button */}
                <div className="add-entry-button-container">
                    <button  className="add-entry-button" onClick={displayEntryModal}>Add entry</button>
                </div>
                {/* Cards Row */}
                <div className="cards-grid">
                    {cards.map((card, index) => (
                        < Daycard
                            key={index}
                            title={card.day}
                            value={card.value}
                            image="Qhacks.jpg"
                        />
                    ))}
                </div>

                {/* Statistics and Graphs Section */}
                <div className="stats-container">
                    <div className="stats-panel">
                        <h3 className="stats-title">Usage Statistics</h3>
                        <div className="chart-container">
                            {/* Add your chart component here */}
                            <p className="placeholder-text">Chart placeholder</p>
                        </div>
                    </div>
                    <div className="stats-panel">
                        <h3 className="stats-title">Performance Metrics</h3>
                        <div className="chart-container">
                            {/* Add your chart component here */}
                            <p className="placeholder-text">Chart placeholder</p>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    );
}