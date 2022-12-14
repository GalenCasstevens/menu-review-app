import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reviews from './pages/Reviews';
import AddReview from './pages/AddReview';
import Container from 'react-bootstrap/Container';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
						<Route path="/restaurant/:id/reviews" element={<Reviews />} />
						<Route path="/restaurant/:id/add-review" element={<AddReview />} />
					</Routes>
				</Container>
			</Router>
		</>
	);
}

export default App;
