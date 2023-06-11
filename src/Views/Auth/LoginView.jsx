import { AuthService } from '../../Services';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const LoginView = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [state, setState] = useState({
		email: '',
		password: '',
		loading: false,
	})
	const { email, password, loading } = state

	const handleChange = (e) => {
		const { name, value } = e.target
		setState(prev => ({ ...prev, [name]: value }))
	};


	const handleSubmit = (e) => {
		e.preventDefault()
		if (loading) return
		setState((prev) => ({ ...prev, loading: true }));
		dispatch(AuthService.login({ email, password }))
			.then((resp) => {
				setState((prev) => ({ ...prev, loading: false }));
				navigate("/dashboard");
			})
			.catch((err) => {
				setState((prev) => ({ ...prev, loading: false }));
			});	
	};


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Login</h2>
				<input placeholder='email' name='email' value={email} onChange={handleChange} />
				<input placeholder='password' name='password' value={password} onChange={handleChange} />
				<button >submit</button>
				<div> <Link to="/forgot-password"> Forget Password? </Link> </div>
			</form>

		</div>
	)
}

export default LoginView;
