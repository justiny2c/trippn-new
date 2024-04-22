import React, { useState } from "react"
import dayjs from "dayjs"

const CalendarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: ( index ) => {}
})

export default CalendarContext

export const CalendarProvider = (props) => {
  const [monthIndex, setMonthIndex ] = useState(dayjs().month())
    return (
      <CalendarContext.Provider value={{monthIndex, setMonthIndex}}>
          {props.children}
      </CalendarContext.Provider>
    )
  }
  

