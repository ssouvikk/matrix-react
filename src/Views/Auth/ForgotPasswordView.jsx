import { useState } from 'react';
import { AuthService } from '../../Services';
import { useParams, useNavigate } from 'react-router-dom';

const ForgotPassword = (props) => {
	const navigate = useNavigate();

	const [state, setState] = useState({
		email: '',
		loading: false,
	})
	const { email, loading } = state

	const handleChange = (e) => {
		const { name, value } = e.target
		setState(prev => ({ ...prev, [name]: value }))
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		if (loading) return
		setState((prev) => ({ ...prev, loading: true }));
		AuthService.requestPassword({ email }).then((resp) => {
			navigate("/")
			setState((prev) => ({ ...prev, loading: false }));
		}).catch(err => {
			setState((prev) => ({ ...prev, loading: false }));
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Forget Password?</h2>
			<input value={email} placeholder='Your email' onChange={handleChange} name="email" />
			<button type='submit' >Submit</button>
		</form>
	)
}

export default ForgotPassword
