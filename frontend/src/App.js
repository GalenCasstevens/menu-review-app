import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuReviews from './pages/MenuReviews';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Container>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/restaurant/:id" element={<MenuReviews />} />
					</Routes>
				</Container>
			</Router>
		</>
	);
}

export default App;
