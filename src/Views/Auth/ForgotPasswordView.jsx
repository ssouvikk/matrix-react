import { useState } from 'react';

const ForgotPassword = (props) => {
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
