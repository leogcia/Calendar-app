import { types } from '../types/types';

export const eventAddNew = ( event ) => ({
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
export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

//Eliminar evento:
export const eventDeleted = (  ) => ({
    type: types.eventDeleted,
});