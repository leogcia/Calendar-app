import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";



function PrivateRoute({ children }) {

    const { uid } = useSelector( state => state.auth );
    // const { pathname, search } = useLocation();

    // localStorage.setItem( 'lastPath', pathname + search );

    return !!uid    // Pasa a booleano
        ? children
        : <Navigate to='/login' />
}

export default PrivateRoute;