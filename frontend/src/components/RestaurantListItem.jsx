import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import ReviewData from '../data/ReviewData';

function RestaurantListItem({ restaurant }) {
	useEffect(() => {}, []);

	return (
		<ListGroup.Item>
			<h5 className="restaurant-name">
				<Link
					className="restaurant-link"
					to={`restaurant/${restaurant._id}/reviews`}
				>
					{restaurant.name}
				</Link>{' '}
				<Rating rating={restaurant.rating} />
				<span className="num-reviews">
					<Badge bg="primary" className="float-end">
						{
							ReviewData.reviews.filter(
								(review) => review.restaurantId === restaurant._id
							).length
						}{' '}
						Reviews
					</Badge>
				</span>
			</h5>
			<p className="restaurant-addr"> {restaurant.address}</p>
			<div className="restaurant-facilities">
				{restaurant.facilities.map((facility) => {
					return (
						<span className="facility-item">
							<Badge bg="primary">{facility}</Badge>
						</span>
					);
				})}
			</div>
		</ListGroup.Item>
	);
}

export default RestaurantListItem;
