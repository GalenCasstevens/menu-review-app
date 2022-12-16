import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import RestaurantData from '../data/RestaurantData';
import RestaurantListItem from './RestaurantListItem';

function RestaurantList() {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		setRestaurants(RestaurantData.restaurants);
	}, []);

	if (restaurants && restaurants !== null) {
		return (
			<ListGroup id="restaurant-list">
				{restaurants.map((restaurant) => (
					<RestaurantListItem restaurant={restaurant} />
				))}
			</ListGroup>
		);
	}

	return <h1>No Data</h1>;
}

export default RestaurantList;
