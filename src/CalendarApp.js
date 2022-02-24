import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './router/AppRouter';



function CalendarApp() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default CalendarApp;