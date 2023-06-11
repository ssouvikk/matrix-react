import { useEffect } from 'react';
import { routes } from '../Routes/Employee.Routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../Components';
import { AuthService } from '../Services';
import { useDispatch } from 'react-redux';


const EmployeeLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AuthService.getMe());
    }, [])

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
                <Route path="/*" element={<Navigate to={'/dashboard'} />} />
            </Routes>
        </div>
    );
}

export default EmployeeLayout