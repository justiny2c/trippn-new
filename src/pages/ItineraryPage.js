import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Ensure you've installed the package
import dayGridPlugin from '@fullcalendar/daygrid'; // For day grid view
import interactionPlugin from '@fullcalendar/interaction'; // For interactive features
import { v4 as uuid } from "uuid";
import './ItineraryPage.css'; // Make sure to have corresponding CSS






const EventItem = ({ info }) => {
    const { event } = info;
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
  };

const ItineraryPage = () => {
//   // You'll need to manage the state for your events, etc.
//   // Initialize the state to hold your events
//   const [events, setEvents] = useState([
//     // Add some initial event data
//     { id: 1, title: 'Sample Event', start: new Date() }
//     // You can add more events as needed
//   ]);

//   // Event drop (drag-and-drop)
//   const handleEventDrop = (info) => {
//     const { event } = info;
//     // Update the event in the state to its new time
//     const updatedEvents = events.map((evt) => {
//       if (evt.id === event.id) {
//         return { ...evt, start: event.start, end: event.end };
//       }
//       return evt;
//     });
//     setEvents(updatedEvents);
//   };

//     // Event click (edit)
//     const handleEventClick = (info) => {
//         const { event } = info;
//         // Prompt for a new title
//         const newTitle = prompt('New title:', event.title);
    
//         if (newTitle) {
//           // Update the event title in the state
//           const updatedEvents = events.map((evt) => {
//             if (evt.id === event.id) {
//               return { ...evt, title: newTitle };
//             }
//             return evt;
//           });
//           setEvents(updatedEvents);
//         }
//       };
    
//       // Date click (add event)
//       const handleDateClick = (info) => {
//         const { date } = info;
//         // Prompt for a new event title
//         const title = prompt('Event Title:');
        
//         if (title) {
//           const newEvent = {
//             id: events.length + 1, // Unique ID for the event
//             title,
//             start: date,
//             // You might want to add other event properties
//           };
//           setEvents([...events, newEvent]);
//         }
//       };
    
      // Function to export the itinerary
      const handleExport = () => {
        // Export functionality
      };
    
      // Function to share the itinerary
      const handleShare = () => {
        // Share functionality
      };

  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid()
        }
      ]);
    }
  };

  return (
    <div className="itinerary-page">
        <div className="full-calendar">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                headerToolbar={{
                    start: "today prev next",
                    end: "dayGridMonth dayGridWeek dayGridDay",
                  }}
                initialView="dayGridMonth"
                views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                events={events}
                editable={true} // Allows drag-and-drop
                selectable={true} // Allows date selection
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                select={handleSelect}
                eventContent={(info) => <EventItem info={info} />}
                // eventDrop={handleEventDrop}
                // eventClick={handleEventClick}
                // dateClick={handleDateClick}
                titleFormat={{ month: 'short', year: 'numeric', day: 'numeric'}}
            />
            <div className="itinerary-actions">
                <button onClick={handleShare}>Share</button>
                <button onClick={handleExport}>Export Itinerary</button>
            </div>
        </div>
    </div>
  );
};

export default ItineraryPage;
