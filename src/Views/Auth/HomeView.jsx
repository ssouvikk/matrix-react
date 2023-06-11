import React, { useEffect } from 'react';
import { AuthService } from '../../Services';
import { useParams, useNavigate } from 'react-router-dom';

const HomeView = (props) => {
    const { token } = useParams();
    const navigate = useNavigate();

    const verifyEmail = () => {
        if (token) {
            AuthService.verifyEmail(token)
                .then(resp => {
                    navigate("/login")
                }).catch(err => {
                    navigate("/")
                })
        }
    }

    useEffect(() => {
        verifyEmail()
    }, [])

    
    return (
        <React.Fragment>
            <h2>This is Home page!!</h2>
        </React.Fragment>
    )
}

export default HomeView