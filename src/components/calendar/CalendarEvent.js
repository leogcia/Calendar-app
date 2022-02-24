import React from 'react';


function CalendarEvent({ event }) {
    const { title, user } = event;
    return (
        <div>
            <strong>{title}</strong>{' '}
            <span>Iniciado por: {user.name}</span>
        </div>
    );
}

export default CalendarEvent;