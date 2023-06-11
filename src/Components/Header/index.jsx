import { Component } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';


const Header = (props) => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.Auth);

    const handleLogOut = () => {
        dispatch(Logout());
    };

    return (
        <div>
            {isAuthenticated && (
                <>
                    <button onClick={handleLogOut}> Logout </button>
                    <Link to="/profile"> <button type="button" > Go To Profile </button> </Link>
                </>
            )}
            {!isAuthenticated && (
                <div >
                    <Link to="/login"> <button type="button" > Login </button>  </Link>
                    <Link to="/register"> <button type="button" > Register  </button> </Link>
                </div>
            )}
        </div>
    );
}

export default Header
