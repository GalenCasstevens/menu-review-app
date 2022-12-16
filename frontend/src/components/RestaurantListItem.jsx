import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom';
import Rating from './Rating';

function RestaurantListItem({ restaurant }) {
	return (
		<ListGroup.Item>
			<h5 className="restaurant-name">
				<Link className="restaurant-link" to={`restaurant/${restaurant._id}`}>
					{restaurant.name}
				</Link>{' '}
				<Rating rating={restaurant.rating} />
				<span className="num-reviews">
					<Badge bg="primary" className="float-end">
						{restaurant.numReviews} Reviews
					</Badge>
				</span>
			</h5>
			<p className="restaurant-addr"> {restaurant.address}</p>
			<div className="restaurant-facilities">
				{restaurant.facilities.map((facility) => {
					return (
						<span key={facility + '123'} className="facility-item">
							<Badge bg="primary">{facility}</Badge>
						</span>
					);
				})}
			</div>
		</ListGroup.Item>
	);
}

export default RestaurantListItem;
