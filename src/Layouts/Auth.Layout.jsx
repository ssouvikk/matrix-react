import React from 'react';
import { routes } from '../Routes/Auth.Routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../Components';

const AuthLayout = (props) => {

    return (
        <div>
            <Header />
            <Routes>
                {routes.map((route, idx) => {
                    const title = { title: route.name };
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            element={<route.component {...props} {...title} />}
                        />
                    ) : null;
                })}
                <Route path="/*" element={<Navigate to={'/login'} />} />
            </Routes>
        </div>
    );
};

export default AuthLayout;

