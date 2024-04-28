import React from 'react'
import CreateEventButton from "./CreateEventButton"
import SmallSideCalendar from './SmallSideCalendar'
import Labels from './Labels'

export default function Sidebar() {
    return (
    <aside className='border p-5 w-64'>
        <CreateEventButton />
        <SmallSideCalendar />
        <Labels />
    </aside>
    )
}
