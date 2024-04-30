const EventModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <h2>{title}</h2>
            {content}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default EventModal;