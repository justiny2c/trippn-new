import React, { useEffect, useState } from 'react';
import supabase from '../api/supabaseClient';
import { useAuth } from "../contexts/AuthContext";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import EventModal from '../components/EventModal';
import LoadingScreen from '../components/LoadingScreen';
import "./Calendar.css"


const Calendar = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialStart, setInitialStart]=useState("")

    const dayHeaderContent = (args) => {
        const now = new Date();
        const utcToday = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

        const headerDate = args.date; // This should be in UTC if your calendar is configured correctly
        const utcHeaderDate = Date.UTC(headerDate.getUTCFullYear(), headerDate.getUTCMonth(), headerDate.getUTCDate());

        // Check if the header's date is today by comparing the UTC timestamps
        const isToday = utcToday === utcHeaderDate;


        let dayNumber = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(args.date);
        // Remove leading zero for day numbers less than 10
        if (dayNumber.startsWith('0')) {
            dayNumber = dayNumber.substring(1);
        }
        
        const dayNames = window.innerWidth >= 768
            ? new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(args.date)
            : new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(args.date);

        return (
            <div className={`header-container ${isToday ? 'header-today' : ''}`}>
                <div className="header-day-name">{dayNames}</div>
                <div className="header-day-number">{dayNumber}</div>
            </div>
        );
    };

    const handleEventClick = ({ event }) => {
        setSelectedEvent(event);
        setIsModalOpen(true); 
    };

    const handleEventDrop = async ({ event }) => {
        const updatedEvent = {
            start_time: event.start.toISOString(), 
            end_time: event.end.toISOString()
        };

        try {
            const response = await axios.put(`https://trippn-ai-fd36c0a9cdb0.herokuapp.com/api/events/${event.id}`, updatedEvent);
    
            if (response.status !== 200) {
                throw new Error('Failed to update event');
            }
        
        } catch (error) {
            console.error('Error updating event:', error);
        }
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

                const formattedEvents = eventsData.map(event => ({
                    id: event.id,
                    title: event.title,
                    start: event.start_time,
                    end: event.end_time,
                    details: event.details,
                    allDay: event.all_day
                }));

                setEvents(formattedEvents);
                setInitialStart(itinerary.start_date)
            }

            setTimeout(() => {
                setLoading(false);
            }, 2500);
        };

        fetchData();
    }, [user]); // Depend on user to refetch when user changes

    if (loading) return <div className='loading-container'><LoadingScreen /></div>;


    return (
        <div className='calendar-page'>
            <div className='calendar-intro'>
                <p className='calendar-title'>Your Itinerary is Ready!</p>
                <p className='calendar-statement'>Congratulations! Your personalized travel itinerary is crafted and ready to guide you through an unforgettable journey. </p>
            </div>
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    initialDate={initialStart}
                    firstDay={0}
                    headerToolbar={{
                        left: 'title',
                        center: 'dayGridMonth,timeGridWeek,timeGridDay',
                        right: 'prev,today,next'
                    }}
                    timeZone='local'
                    editable={true}
                    eventDrop={handleEventDrop}
                    eventResize={handleEventDrop}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    dayHeaderContent={dayHeaderContent}
                    events={events}
                    eventClick={handleEventClick}
                />
                {isModalOpen && (
                <EventModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    id={selectedEvent?.id}
                    title={selectedEvent?.title}
                    details={selectedEvent?.extendedProps.details}
                    start={selectedEvent?.start.toISOString()}
                    end={selectedEvent?.end.toISOString()}
                />
            )}
            </div>
        </div>
    );
}

export default Calendar;
