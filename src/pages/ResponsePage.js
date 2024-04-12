import React from 'react'
import "./ResponsePage.css"




// const ScheduleDisplay = ({ response }) => {

const ScheduleDisplay = () => {

    // Define your fixed response data directly inside the component
    const response = "# Tokyo to Paris Trip Schedule\n\n## **Day 1: 2023-01-01**\n- **Morning**: \n  - Depart from Tokyo Haneda Airport at 10:00 AM\n- **Afternoon**:\n  - Arrive at Charles de Gaulle Airport in Paris at 3:00 PM\n  - Check in at hotel\n- **Evening**:\n  - Dinner at a local French restaurant\n\n## **Day 2: 2023-01-02**\n- **Morning**:\n  - Visit the Eiffel Tower\n- **Afternoon**:\n  - Explore the Louvre Museum\n- **Evening**:\n  - Enjoy a Seine River cruise\n\n## **Day 3: 2023-01-03**\n- **Morning**:\n  - Day trip to Versailles Palace\n- **Afternoon**:\n  - Shopping on Champs-Élysées\n- **Evening**:\n  - Dinner at a Michelin-starred restaurant\n\n## **Day 4: 2023-01-04**\n- **Morning**:\n  - Visit Notre Dame Cathedral\n- **Afternoon**:\n  - Explore Montmartre and Sacré-Cœur Basilica\n- **Evening**:\n  - Attend a cabaret show at Moulin Rouge\n\n## **Day 5: 2023-01-05**\n- **Morning**:\n  - Check out of hotel\n- **Afternoon**:\n  - Depart from Charles de Gaulle Airport at 1:00 PM\n- **Evening**:\n  - Arrive back in Tokyo at 9:00 PM\n\nThis itinerary is subject to change based on individual preferences and availability."

    const lines = response.split('\n');
    let formattedSchedule = [];
    let currentDay = null;
    let currentTimeBlock = null;

    lines.forEach(line => {
        if (line.startsWith('## **Day')) {
          // When a new day starts, we push the last day into the schedule and start a new one
          if (currentDay) {
            formattedSchedule.push(<div key={currentDay.key} className="day-container">{currentDay.content}</div>);
          }
          currentDay = { key: line, content: [<h2 key={line} className="day">{line.replace(/## \*\*/g, '').replace(/\*\*/g, '')}</h2>] };
        } else if (line.trim().match(/^-\s\*\*(Morning|Afternoon|Evening)\*\*:/)) {
          // When a new time block starts, we start a new one
          if (currentTimeBlock) {
            currentDay.content.push(<div key={currentTimeBlock.key} className="time-block">{currentTimeBlock.content}</div>);
          }
          const timeBlockTitle = line.replace(/-\s\*\*/g, '').replace(/\*\*/g, '').trim();
          currentTimeBlock = { key: timeBlockTitle, content: [<strong key={timeBlockTitle}>{timeBlockTitle}</strong>] };
        } else if (line.trim().startsWith('-')) {
          // We add activities to the current time block
          const activity = line.replace(/\*\*/g, '').substring(2).trim();  // Remove the "- " prefix
          currentTimeBlock.content.push(<p key={activity} className="activity">{activity}</p>);
        }
      });
    
      // Push the last time block and day into the schedule
      if (currentTimeBlock) {
        currentDay.content.push(<div key={currentTimeBlock.key} className="time-block">{currentTimeBlock.content}</div>);
      }
      if (currentDay) {
        formattedSchedule.push(<div key={currentDay.key} className="time-block">{currentDay.content}</div>);
      }

      return (
        <div className='response-page'>
            <div className='response-section'>
                <div className='response-intro'>
                    <p className='response-statement'>Hello</p>
                </div>
                <div className='response-container'>
                    {formattedSchedule}
                </div>  
            </div>
        </div>
        )
}
  
  export default ScheduleDisplay;