import React, { useContext } from 'react'
import logoPlane from "../../icons/trippn-logo-plane.png"
import CalendarContext from "../../contexts/CalendarContext"
import dayjs from 'dayjs'

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(CalendarContext)
    
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }
    function handleReset() {
        setMonthIndex(dayjs().month())
    }

    return (
        <header className='px-4 py-2 flex items-center'>
            <img src={logoPlane} alt="logo" className='mr-2 w-12 h-12' />
            <h1 className='mr-10 text-xl text-gray-500 font-semibold'>
                Calendar
            </h1>
            <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'>
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_left
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_right
                </span>
            </button>
            <h2 className='ml-4 text-xl text-gray-500 font-semibold'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>        
        </header>
    )
}
