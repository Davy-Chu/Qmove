export default function Daycard(props) {
    return (
        <div
            key={props.index}
            className="dashboard-card"
        >
            <h3 className="card-title">Day {props.title}</h3>
            <img
                src={`http://localhost:5000/get_images/${props.image}`}
                alt={props.image}
                className="card-image"
            />
            <p className="card-value">ROM: {props.value}</p>
            <p className="card-description">{props.description}</p>
        </div>
    );
}