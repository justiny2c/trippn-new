import React, {useContext} from 'react'
import CalendarContext from '../../contexts/GoogleCalendarContext'

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(CalendarContext)

    return (
    <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <span className='material-icons-outlined text-2xl'>add</span>
        <span className='pl-3 pr-6'>Create</span>
    </button>
    )
}

export default CreateEventButton
