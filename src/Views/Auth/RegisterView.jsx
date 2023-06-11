import { useState } from 'react';
import { USER_TYPES } from '../../Configs/Constants';

const RegisterView = (props) => {
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
