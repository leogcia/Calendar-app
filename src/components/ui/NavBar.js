import React from 'react';


export function NavBar() {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand"> 
                Nan
            </span>

            <button className='btn btn-outline-danger'>
                <i className='fas fa-sign-out-alt'></i>
                <span> Salir</span>
            </button>
        </div>
    );
}
