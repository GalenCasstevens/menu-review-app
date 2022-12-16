import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
	return (
		<div id="login-page">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>

				<div className="d-grid gap-2">
					<Button id="login-btn" variant="primary" type="submit">
						Login
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default Login;
