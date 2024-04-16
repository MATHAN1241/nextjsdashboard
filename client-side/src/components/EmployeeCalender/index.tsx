
'use client'
import React, { useState } from 'react';

const EmpCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [eventDate, setEventDate] = useState('');
    const [eventFestival, setEventFestival] = useState('');
    const [events, setEvents] = useState({});

    const daysInMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
    ).getDay();

    const prevMonth = () => {
        setSelectedDate((prev) => {
            const prevMonth = new Date(prev);
            prevMonth.setMonth(prevMonth.getMonth() - 1);
            return prevMonth;
        });
    };

    const nextMonth = () => {
        setSelectedDate((prev) => {
            const nextMonth = new Date(prev);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            return nextMonth;
        });
    };

    const handleAddEvent = () => {
        setShowModal(true);
    };

    const handleSubmit = () => {
        // Update events data
        const updatedEvents = { ...events };
        const selectedDateTime = new Date(eventDate);
        selectedDateTime.setHours(0, 0, 0, 0); // Set time to midnight
        const formattedDate = selectedDateTime.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
        if (!updatedEvents[formattedDate]) {
            updatedEvents[formattedDate] = [];
        }
        updatedEvents[formattedDate].push({ festival: eventFestival });
        console.log(updatedEvents); // Check the event data before setting state
        setEvents(updatedEvents);
        // Reset form fields
        setEventDate('');
        setEventFestival('');
        // Close modal
        setShowModal(false);
    };
    
    return (
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <button onClick={prevMonth}>{'<'}</button>
                <span style={{ fontSize: '1.5rem', margin: '0 20px' }}>
                    {selectedDate.toLocaleString('default', { month: 'long' })}{' '}
                    {selectedDate.getFullYear()}
                </span>
                <button onClick={nextMonth}>{'>'}</button>
                <button onClick={handleAddEvent} style={{ backgroundColor: 'violet', color: 'white', padding: '10px 20px', borderRadius: '5px', marginLeft: '20px' }}>Add Event</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Sun</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Mon</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Tue</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Wed</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Thu</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Fri</th>
                        <th style={{ width: '14.28%', backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map(
                        (_, weekIndex) => (
                            <tr key={weekIndex}>
                                {[...Array(7)].map((_, dayIndex) => {
                                    const day = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                                    const date = new Date(
                                        selectedDate.getFullYear(),
                                        selectedDate.getMonth(),
                                        day
                                    );
                                    const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
                                    return (
                                        <td key={dayIndex} style={{ height: '120px', padding: '10px', border: '1px solid black' }}>
                                            {day > 0 && day <= daysInMonth && (
                                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '1.2rem' }}>
                                                    <span style={{ textAlign: 'center' }}>{date.toLocaleDateString('default', { day: 'numeric' })}</span>
                                                    {events[formattedDate] && (
                                                        <ul style={{ margin: 0, padding: 0 }}>
                                                            {events[formattedDate].map((event, index) => (
                                                                <li key={index} style={{ listStyle: 'none' }}>{event.festival}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            {showModal && (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <h2>Add Event</h2>
            <div>
                <label>Date:</label>
                <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </div>
            <div>
                <label>Festival:</label>
                <input type="text" value={eventFestival} onChange={(e) => setEventFestival(e.target.value)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button onClick={handleSubmit} style={{ backgroundColor: 'violet', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
                <button onClick={() => setShowModal(false)} style={{ backgroundColor: 'grey', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Cancel</button>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default EmpCalendar;




