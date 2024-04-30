import React, { useEffect, useReducer, useState, useMemo } from "react"
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
    dispatchCalEvent: ({type, payload}) => {},
    savedEvents: [],
    selectedEvent: () => {},
    labels: [],
    setLabels: () => {},
    updateLabel: () => {},
    filteredEvents: []
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
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [labels, setLabels] = useState([])
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer, 
    [], 
    initEvents
  )

  const filteredEvents = useMemo(() => {
    return savedEvents.filter(evt => 
      labels.filter(lbl => lbl.checked)
      .map(lbl => lbl.label)
      .includes(evt.label)
    )
  }, [savedEvents, labels])

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
  }, [savedEvents])

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set( savedEvents.map( evt => evt.label))].map(label => {
        const currentLabel = prevLabels.find(
          (lbl) => lbl.label === label)
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        }
      })
    })
  }, [savedEvents])

  useEffect(() => {
    if(smallSideCalendarMonth !== null){
      setMonthIndex(smallSideCalendarMonth)
    }
  }, [smallSideCalendarMonth])

  useEffect(() => {
    if(!showEventModal){
      setSelectedEvent(null)
    }
  }, [showEventModal])

  function updateLabel(label) {
    setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl))
  }
  
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
          dispatchCalEvent,
          savedEvents,
          selectedEvent,
          setSelectedEvent,
          labels, 
          setLabels,
          updateLabel,
          filteredEvents
        }}
      >
          {props.children}
      </CalendarContext.Provider>
    )
  }
  

