import React, { useEffect, useState } from 'react';
import supabase from '../api/supabaseClient';
import { useAuth } from "../contexts/AuthContext";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import EventModal from '../components/EventModal';
import "./Calendar.css"


const Calendar = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEventClick = ({ event }) => {
        console.log("Event clicked:", event.title);
        setSelectedEvent(event);
        setIsModalOpen(true); // Open the modal when an event is clicked
    };
    
    useEffect(() => {
        const fetchData = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            // Fetch the latest itinerary
            const { data: itineraryData, error: itineraryError } = await supabase
                .from('itineraries')
                .select()
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(1);

            if (itineraryError) {
                console.error('Error fetching itinerary:', itineraryError);
                setLoading(false);
                return;
            }

            if (itineraryData && itineraryData.length > 0) {
                const itinerary = itineraryData[0];

                // Fetch events linked to the fetched itinerary
                const { data: eventsData, error: eventsError } = await supabase
                    .from('events')
                    .select()
                    .eq('itinerary_id', itinerary.id);

                if (eventsError) {
                    console.error('Error fetching events:', eventsError);
                    setLoading(false);
                    return;
                }

                // Adjust data for FullCalendar
                const formattedEvents = eventsData.map(event => ({
                    title: event.title,
                    start: event.start_time,
                    end: event.end_time,
                    details: event.details,
                    allDay: event.all_day
                }));

                setEvents(formattedEvents);
            }
            setLoading(false);
        };

        fetchData();
    }, [user]); // Depend on user to refetch when user changes

    if (loading) return <p>Loading...</p>;

    return (
        <div className='calendar-page'>
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    events={events}
                    eventClick={handleEventClick}
                />
                {isModalOpen && (
                <EventModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={selectedEvent?.title}
                    content={
                        <div>
                            <p>{selectedEvent?.extendedProps.details}</p>
                            <p>Start: {selectedEvent?.start.toISOString()}</p>
                            <p>End: {selectedEvent?.end.toISOString()}</p>
                        </div>
                    }
                />
            )}
            </div>
        </div>
    );
}

export default Calendar;
