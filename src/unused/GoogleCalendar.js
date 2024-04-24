import React, {useState , useContext, useEffect} from 'react'
import { getMonth } from './util'
import CalendarHeader from './calendarcomponents/CalendarHeader'
import Sidebar from './calendarcomponents/Sidebar'
import Month from './calendarcomponents/Month'
import CalendarContext from "../contexts/CalendarContext"
import EventModal from './calendarcomponents/EventModal'
import "./GoogleCalendar.css"

const GoogleCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(CalendarContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  } , [monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className='calendar-page'>
          <div className='h-screen flex flex-col'>
            <CalendarHeader />
            <div className='flex flex-1'>
              <Sidebar />
              <Month month={currentMonth}/>
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default GoogleCalendar
