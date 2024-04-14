import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./Calendar.css"

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([
        {
            id: 0,
            title: 'Long Event',
            start: new Date(2023, 3, 7),
            end: new Date(2023, 3, 10),
        }
    ]);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            setEvents(prevEvents => [
                ...prevEvents,
                {
                    id: prevEvents.length,
                    title,
                    start,
                    end,
                },
            ]);
        }
    };

    const moveEvent = ({ event, start, end }) => {
        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);
        setEvents(nextEvents);
    };

    const resizeEvent = ({ event, start, end }) => {
        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);
        setEvents(nextEvents);
    };

    const deleteEvent = eventToDelete => {
        setEvents(events.filter(event => event.id !== eventToDelete.id));
    };

    return (
        <div className='calendar'>
            <div className= "calendar-container">
                <Calendar
                    localizer={localizer}
                    events={events}
                    onEventDrop={moveEvent}
                    resizable
                    onEventResize={resizeEvent}
                    onSelectSlot={handleSelect}
                    onSelectEvent={event => {
                        if (window.confirm(`Would you like to delete the event: '${event.title}'?`))
                            deleteEvent(event);
                    }}
                    selectable
                    views={['month', 'week', 'day', 'agenda']}
                    defaultView="month"
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div>
    );
};

export default MyCalendar;
