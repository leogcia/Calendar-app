import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/events';


function DeleteEventFab() {

    const dispatch = useDispatch();

    const handleDelete = ( ) => {
        dispatch( eventDeleted() )
    }

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
        >
            <i className='fas fa-trash'></i>
            <span> Borrar Evento </span>
        </button>
    );
}

export default DeleteEventFab;