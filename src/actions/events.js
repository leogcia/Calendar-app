import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

//Agregar un nuevo evento a la baase de datos:
export const eventStartAddNew = ( event ) => {
    return async ( dispatch, getState ) => {

        const { uid, name } = getState().auth;
        
        try {
            
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();

            if( body.ok ) {
                //Agrego id del evento y user antes de usar el dispatch, ya que de un inicio no los regresa como tal:
                event.id = body.eventoGuardado.id;  // eventoGuardado es como lo establecimos desde el backend
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch( eventAddNew( event ) );
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
});

//Muestra el evento activo:
export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

//Limpiar Nota Activa:
export const eventClearActiveEvent = ( ) => ({
    type: types.eventClearActiveEvent,
});

//Actualizar evento:
const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartUpdate = ( event ) => {
    return async ( dispatch ) => {
        try {
            
            const resp = await fetchConToken( `events/${event.id}`, event, 'PUT' );
            const body = await resp.json();
            if( body.ok ) {
                dispatch( eventUpdated( event ) )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

//Eliminar evento:
const eventDeleted = (  ) => ({
    type: types.eventDeleted,
});

export const eventStartDelete = () => {
    return async ( dispatch, getState ) => {
        const { id } = getState().calendar.activeEvent;
        try {
            
            const resp = await fetchConToken( `events/${id}`, {}, 'DELETE' );
            const body = await resp.json();
            if( body.ok ) {
                dispatch( eventDeleted(  ) )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}


export const evenStartLoading = () => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchConToken( 'events' );
            const body = await resp.json();
            const events = prepareEvents(body.eventos);
            dispatch( eventLoaded( events ) );

        } catch (error) {
            console.log(error)
        }
    }
};

const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})

export const eventLogout = () => {
    return {
        type: types.eventLogout
    }
}