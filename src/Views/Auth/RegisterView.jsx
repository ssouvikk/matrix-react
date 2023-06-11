import { useState } from 'react';
import { AuthService } from '../../Services';
import { useNavigate } from "react-router-dom";
import { USER_TYPES } from '../../Configs/Constants';

const RegisterView = (props) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
        name: '',
        loading: false,
        type: USER_TYPES.EMPLOYEE
    })
    const { email, password, loading, name, type } = state

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prev => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return
        setState((prev) => ({ ...prev, loading: true }));
        AuthService.register({ email, password, name, type, })
            .then((resp) => {
                setState((prev) => ({ ...prev, loading: false }));
                navigate("/");
            })
            .catch((err) => {
                setState((prev) => ({ ...prev, loading: false }));
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <select name="type" onChange={handleChange} value={type}>
                        <option value={USER_TYPES.ADMIN}>Admin</option>
                        <option value={USER_TYPES.EMPLOYEE}>Employee</option>
                    </select>
                </div>
                <input placeholder='email' name='email' value={email} onChange={handleChange} />
                <input placeholder='name' name='name' value={name} onChange={handleChange} />
                <input placeholder='password' name='password' value={password} onChange={handleChange} />
                <button >submit</button>
            </form>
        </div>
    );
}

export default RegisterView;
