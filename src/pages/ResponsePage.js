import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import supabase from '../api/supabaseClient';
import { Spinner } from "@material-tailwind/react";
import "./ResponsePage.css"


const ResponsePage = () => {
    const { user } = useAuth();
    const [itinerary, setItinerary] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getItinerary = async () => {
            if (!user) {
                setLoading(false); // No user found, no fetch will occur
                return;
            }
            const { data, error } = await supabase
                .from("itineraries")
                .select()
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(1);

            if (error) {
                console.error('Error fetching itinerary:', error);
                setLoading(false); // Error occurred, end loading state
                return;
            }
            setItinerary(data && data.length > 0 ? data[0] : null);
            setLoading(false); // Data fetched successfully, end loading state
        };

        getItinerary();
    }, [user]); // Depend on user to refetch when user changes

    console.log("Itinerary", itinerary.details)    
    // const response = "# Tokyo to Paris Trip Schedule\n\n## **Day 1: 2023-01-01**\n- **Morning**: \n  - Depart from Tokyo Haneda Airport at 10:00 AM\n- **Afternoon**:\n  - Arrive at Charles de Gaulle Airport in Paris at 3:00 PM\n  - Check in at hotel\n- **Evening**:\n  - Dinner at a local French restaurant\n\n## **Day 2: 2023-01-02**\n- **Morning**:\n  - Visit the Eiffel Tower\n- **Afternoon**:\n  - Explore the Louvre Museum\n- **Evening**:\n  - Enjoy a Seine River cruise\n\n## **Day 3: 2023-01-03**\n- **Morning**:\n  - Day trip to Versailles Palace\n- **Afternoon**:\n  - Shopping on Champs-Élysées\n- **Evening**:\n  - Dinner at a Michelin-starred restaurant\n\n## **Day 4: 2023-01-04**\n- **Morning**:\n  - Visit Notre Dame Cathedral\n- **Afternoon**:\n  - Explore Montmartre and Sacré-Cœur Basilica\n- **Evening**:\n  - Attend a cabaret show at Moulin Rouge\n\n## **Day 5: 2023-01-05**\n- **Morning**:\n  - Check out of hotel\n- **Afternoon**:\n  - Depart from Charles de Gaulle Airport at 1:00 PM\n- **Evening**:\n  - Arrive back in Tokyo at 9:00 PM\n\nThis itinerary is subject to change based on individual preferences and availability."

    let formattedSchedule = [];
    if(itinerary && itinerary.details) {
        const lines = itinerary.details.split('\n');
        let currentDay = null;
        let currentTimeBlock = null;

        lines.forEach(line => {
            if (line.startsWith('## **Day')) {
                // Push the last time block to the day before starting a new day
                if (currentTimeBlock) {
                    currentDay.content.push(<div key={currentTimeBlock.key} className="time-block">{currentTimeBlock.content}</div>);
                    currentTimeBlock = null;
                }
                // Push the completed day to the formatted schedule
                if (currentDay) {
                    formattedSchedule.push(<div key={currentDay.key} className="day-container">{currentDay.content}</div>);
                }
                // Start a new day
                currentDay = { key: line, content: [<h2 key={line} className="day">{line.replace(/## \*\*/g, '').replace(/\*\*/g, '')}</h2>] };
            } else if (line.trim().match(/^-\s\*\*(Morning|Afternoon|Evening)\*\*:/)) {
                // Start a new time block
                if (currentTimeBlock) {
                    currentDay.content.push(<div key={currentTimeBlock.key} className="time-block">{currentTimeBlock.content}</div>);
                }
                const timeBlockTitle = line.replace(/-\s\*\*/g, '').replace(/\*\*/g, '').trim();
                currentTimeBlock = { key: timeBlockTitle, content: [<strong key={timeBlockTitle}>{timeBlockTitle}</strong>] };
            } else if (line.trim().startsWith('-')) {
                // Add activities to the current time block
                const activity = line.replace(/\*\*/g, '').substring(2).trim();
                currentTimeBlock.content.push(<p key={activity} className="activity">{activity}</p>);
            }
        });

        // Ensure to push the last time block if there's one remaining
        if (currentDay) {
            if (currentTimeBlock) {
                currentDay.content.push(<div key={currentTimeBlock.key} className="time-block">{currentTimeBlock.content}</div>);
            }
            // Finally, push the last day into the formatted schedule if it exists
            formattedSchedule.push(<div key={currentDay.key} className="day-container">{currentDay.content}</div>);
        }
    }

    return (
    <div className='response-page'>
        {loading ? (
            <div className="loading-container">
                <Spinner className="h-12 w-12" color="blue"/>
            </div>
        ) : (
            <div className='response-section'>
                <div className='response-intro'>
                    <p className='response-title'>Your Itinerary is Ready!</p>
                    <p className='response-statement'>Congratulations! Your personalized travel itinerary is crafted and ready to guide you through an unforgettable journey. </p>
                </div>
                <div className='response-container'>
                    {formattedSchedule}
                </div>  
            </div>
        )}
    </div>
    )
}
  
  export default ResponsePage;