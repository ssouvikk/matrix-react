import { useState } from 'react';


const ResetPassword = (props) => {

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