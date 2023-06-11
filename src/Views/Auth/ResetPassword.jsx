import { useState } from 'react';
import { AuthService } from '../../Services';
import { useParams, useNavigate } from 'react-router-dom';


const ResetPassword = (props) => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        password: '',
        confirmPassword: '',
        loading: false,
    })
    const { confirmPassword, password, loading, } = state

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prev => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return
        setState((prev) => ({ ...prev, loading: true }));
        AuthService.resetPassword({ token, password, confirmPassword })
            .then((resp) => {
                navigate("/login");
                setState((prev) => ({ ...prev, loading: false }));
            })
            .catch(err => {
                console.log(err)
                setState((prev) => ({ ...prev, loading: false }))
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <input placeholder='password' value={password} name='password' onChange={handleChange} />
            <input placeholder='confirmPassword' value={confirmPassword} name='confirmPassword' onChange={handleChange} />
            <button type='submit' >submit</button>
        </form>
    )
}

export default ResetPassword