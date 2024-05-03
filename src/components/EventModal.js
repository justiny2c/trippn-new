import React from "react"
import "./EventModal.css"


function formatTime(isoString) {
    const date = new Date(isoString);
    let hours = date.getUTCHours(); // Get hours based on UTC
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0'+minutes : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
}

const EventModal = ({ isOpen, onClose, title, details, start, end }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: '40%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <h2 className="event-title">{title}</h2>
            <div className="event-details">{details}</div>
            <div className="event-time">
                <strong>Start:</strong> {formatTime(start)} <br />
                <strong>End:</strong> {formatTime(end)}
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default EventModal;