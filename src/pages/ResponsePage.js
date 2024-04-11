import React from 'react'




// const ScheduleDisplay = ({ response }) => {

const ScheduleDisplay = () => {

    // Define your fixed response data directly inside the component
    const response = "# Tokyo to Paris Trip Schedule\n\n## **Day 1: 2023-01-01**\n- **Morning**: \n  - Depart from Tokyo Haneda Airport at 10:00 AM\n- **Afternoon**:\n  - Arrive at Charles de Gaulle Airport in Paris at 3:00 PM\n  - Check in at hotel\n- **Evening**:\n  - Dinner at a local French restaurant\n\n## **Day 2: 2023-01-02**\n- **Morning**:\n  - Visit the Eiffel Tower\n- **Afternoon**:\n  - Explore the Louvre Museum\n- **Evening**:\n  - Enjoy a Seine River cruise\n\n## **Day 3: 2023-01-03**\n- **Morning**:\n  - Day trip to Versailles Palace\n- **Afternoon**:\n  - Shopping on Champs-Élysées\n- **Evening**:\n  - Dinner at a Michelin-starred restaurant\n\n## **Day 4: 2023-01-04**\n- **Morning**:\n  - Visit Notre Dame Cathedral\n- **Afternoon**:\n  - Explore Montmartre and Sacré-Cœur Basilica\n- **Evening**:\n  - Attend a cabaret show at Moulin Rouge\n\n## **Day 5: 2023-01-05**\n- **Morning**:\n  - Check out of hotel\n- **Afternoon**:\n  - Depart from Charles de Gaulle Airport at 1:00 PM\n- **Evening**:\n  - Arrive back in Tokyo at 9:00 PM\n\nThis itinerary is subject to change based on individual preferences and availability."

    // Process the fixed response data as before
    const formattedSchedule = response.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.slice(3)}<br/></h2>;
      }
      // Handle markdown bold text, ensuring it only affects "Day X" headings
      else if (line.startsWith('**Day')) {
        const boldText = line.replace(/\*\*/g, ''); // Remove markdown bold syntax
        return <strong key={index}>{boldText}<br/></strong>;
      }
      // Regular text
      return <span key={index}>{line}<br/></span>;
    });
  
    return <div>{formattedSchedule}</div>;
  }
  
  export default ScheduleDisplay;