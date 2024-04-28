import React, { useEffect, useReducer, useState } from "react"
import dayjs from "dayjs"

const CalendarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: ( index ) => {},
    smallSideCalendarMonth: 0,
    setSmallSideCalendarMonth: ( index ) => {},
    daySelected: null,
    setDaySelected: ( day ) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCalEvent: ({type, payload}) => {}
})

export default CalendarContext

function savedEventsReducer (state, {type, payload}){
  switch (type){
    case 'push':
      return [...state, payload]
    case "update":
      return state.map(evt => evt.id === payload.id ? payload : evt)
    case "delete":
      return state.filter(evt => evt.id !== payload.id)
    default:
      throw new Error()
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents")
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}

export const CalendarProvider = (props) => {
  const [monthIndex, setMonthIndex ] = useState(dayjs().month())
  const [smallSideCalendarMonth, setSmallSideCalendarMonth] = useState(null)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [ showEventModal, setShowEventModal] = useState(false)
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer, 
    [], 
    initEvents
  )

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
  }, [savedEvents])

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
          setDaySelected,
          showEventModal,
          setShowEventModal,
          dispatchCalEvent
        }}
      >
          {props.children}
      </CalendarContext.Provider>
    )
  }
  

