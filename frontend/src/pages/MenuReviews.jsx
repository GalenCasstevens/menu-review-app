import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantData from '../data/RestaurantData';

function MenuReviews() {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState([]);

	useEffect(() => {
		setRestaurant(RestaurantData.restaurants.find((x) => x._id === id));
	}, []);

	return (
		<>
			<h2 id="menu-reviews-title">{restaurant.name}</h2>
			<hr className="title-hr" />
		</>
	);
}

export default MenuReviews;
