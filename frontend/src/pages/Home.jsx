import Container from 'react-bootstrap/Container';
import RestaurantList from '../components/RestaurantList';

function Home() {
	return (
		<Container id="home-page">
			<RestaurantList />
		</Container>
	);
}

export default Home;
