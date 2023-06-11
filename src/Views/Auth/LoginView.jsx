import { Link } from 'react-router-dom';
import { useState } from 'react';


const LoginView = (props) => {

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
		
	};


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Login</h2>
				<input name='email' value={email} onChange={handleChange} />
				<input name='password' value={password} onChange={handleChange} />
				<button >submit</button>
				<div> <Link to="/forgot-password"> Forget Password? </Link> </div>
			</form>

		</div>
	)
}

export default LoginView;
