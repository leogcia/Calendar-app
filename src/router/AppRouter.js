import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function AppRouter() {

    const dispatch = useDispatch();
    const { checking } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch]);

    if( checking ) {
        return ( <h4>Espere...</h4> )
    }

    return (
        <Router>
            <Routes>
                <Route path='/login' element={
                <PublicRoute>
                    <LoginScreen/>
                </PublicRoute>
                } />
                
                <Route path='/' element={
                <PrivateRoute>
                    <CalendarScreen/>
                </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default AppRouter;