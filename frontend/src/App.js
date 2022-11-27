import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
