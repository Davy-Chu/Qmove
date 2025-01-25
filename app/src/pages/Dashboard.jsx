import Navbar from '../components/Navbar';
export default function Dashboard() {
    // Example data - replace with your actual data
    const daysCount = 30;
    const cards = [
        { title: 'Total Users', value: '1,234' },
        { title: 'Active Sessions', value: '456' },
        { title: 'Revenue', value: '$10,234' },
        { title: 'Conversion Rate', value: '12.5%' },
        { title: 'New Users', value: '89' },
    ];

    return (
        <div className="dashboard-page">
            <Navbar />
        <div className="dashboard-container">
            
            {/* Days Counter Header */}
            <div className="days-header">
                <h2>Last {daysCount} Days</h2>
            </div>

            {/* Cards Row */}
            <div className="cards-grid">
                {cards.map((card, index) => (
                    <div 
                        key={index}
                        className="dashboard-card"
                    >
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-value">{card.value}</p>
                    </div>
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
        </div>
        </div>
    );
}