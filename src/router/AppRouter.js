import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginScreen/>} />
                <Route path='/' element={<CalendarScreen/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;