import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar } from '../ui/NavBar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';

const localizer = momentLocalizer(moment);


function CalendarScreen() {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );
    
    //ultima vista en la pagina para que al recargarla sea ahí mismo
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    // Evento al dar doble click
    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    }
    // Evento al dar seleccionar el evento
    const onSelectEvent = (e) => {
        dispatch( eventSetActive(e) ) //muestra el evento activo en el sate
    }
    //Evento al seleccionar la vista del calendario (mes, semana, día, agenda)
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        console.log(e)
        dispatch( eventClearActiveEvent())
    }

    const evenStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }


    return (
        <div>
            <NavBar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={evenStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={onViewChange}
                view={lastView}  //ultima vista en la pagina para que al recargarla sea ahí mismo
                components={{
                    event: CalendarEvent    //importamso del componente: CalendarEvent
                }}
            />

            <AddNewFab/>
            {
                activeEvent && <DeleteEventFab/>
            }
            

            <CalendarModal/>

        </div>
    );
}

export default CalendarScreen;