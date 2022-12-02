import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantData from '../data/RestaurantData';
import Rating from './Rating';

function RestaurantList() {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		setRestaurants(RestaurantData.restaurants);
	}, []);

	if (restaurants && restaurants !== null) {
		return (
			<ListGroup id="restaurant-list">
				{restaurants.map((restaurant) => (
					<ListGroup.Item>
						<h5 className="restaurant-name">
							<Link className='restaurant-link' to={`restaurant/${restaurant._id}`}>
								{restaurant.name}
							</Link>
							{' '}
							<Rating rating={restaurant.rating} />
							<span className="num-reviews">
								<Badge bg="primary" className="float-end">
									{restaurant.numReviews} Reviews
								</Badge>
							</span>
						</h5>
						<p className="restaurant-addr">	{restaurant.address}</p>
						<div className="restaurant-facilities">
							{restaurant.facilities.map((facility) => {
								return (
									<span key={facility + "123"} className="facility-item">
										<Badge bg="primary">{facility}</Badge>
									</span>
								)
							})}
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		);
	}

	return <h1>No Data</h1>;
}

export default RestaurantList;
