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

function formatDate(dateString) {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const EventModal = ({ isOpen, onClose, title, details, start, end }) => {
    if (!isOpen) return null;

    return (
        <div className="event-modal">
            <div className="event-modal-container">
                <h2 className="event-title">{title}</h2>
                <div className="event-details">{details}</div>
                <div className="event-date">
                    <span className='material-icons-outlined'>
                        event
                    </span>
                    <p>{formatDate(start)}</p>
                </div>
                <div className="event-time">
                    <span className='material-icons-outlined'>
                        schedule
                    </span>
                    <p>{formatTime(start)}</p>
                    <p>{formatTime(end)}</p> 
                </div>
                <div className="event-footer">
                    <button onClick={onClose}>
                        <span className='material-icons-outlined'>
                            close
                        </span>
                    </button> 
                </div>
            </div>
        </div>
    );
};

export default EventModal;