import React, { useEffect, useState } from "react"
import dayjs from "dayjs"

const CalendarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: ( index ) => {},
    smallSideCalendarMonth: 0,
    setSmallSideCalendarMonth: ( index ) => {},
    daySelected: null,
    setDaySelected: ( day ) => {},
})

export default CalendarContext

export const CalendarProvider = (props) => {
  const [monthIndex, setMonthIndex ] = useState(dayjs().month())
  const [smallSideCalendarMonth, setSmallSideCalendarMonth] = useState(null)
  const [daySelected, setDaySelected] = useState(null)

  useEffect(() => {
    if(smallSideCalendarMonth !== null){
      setMonthIndex(smallSideCalendarMonth)
    }
  }, [smallSideCalendarMonth])
  
  return (
      <CalendarContext.Provider 
        value={{
          monthIndex, 
          setMonthIndex, 
          smallSideCalendarMonth, 
          setSmallSideCalendarMonth, 
          daySelected, 
          setDaySelected}}
      >
          {props.children}
      </CalendarContext.Provider>
    )
  }
  

