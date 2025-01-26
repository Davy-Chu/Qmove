export default function Daycard(props) {
    return (
        <div
            key={props.index}
            className="dashboard-card"
        >
            <h3 className="card-title">Day {props.title}</h3>
            <img
                src={props.image}
                alt={props.title}
                className="card-image"
            />
            <p className="card-value">ROM: {props.value}</p>
        </div>
    );
}