import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantData from '../data/RestaurantData';
import UserData from '../data/UserData';
import ReviewData from '../data/ReviewData';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import DateTime from 'date-time';
import Rating from '../components/Rating';

function Reviews() {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		setRestaurant(RestaurantData.restaurants.find((x) => x._id === id));
		setReviews(
			ReviewData.reviews.filter((review) => review.restaurantId === id)
		);
	}, []);

	return (
		<>
			<h2 id="menu-reviews-title">{restaurant.name}</h2>
			<Button id="add-review-btn" variant="primary">
				Leave Review
			</Button>
			<hr className="title-hr" />
			<Container>
				<ListGroup id="review-list">
					{reviews.map((review) => (
						<ListGroup.Item>
							<Row>
								<Col md={3}>
									<div className="user-pic">
										<span className="review-username-date">
											<Row>
												<Col>
													<span className="username">
														{
															UserData.users.find(
																(x) => x._id === review.userId
															).name
														}
													</span>
												</Col>
												<Col>
													<span className="datetime">{DateTime()}</span>
												</Col>
											</Row>
										</span>
										<Image
											src={review.imageUrl}
											className="menu-item-pic"
											thumbnail
										/>
									</div>
								</Col>
								<Col md={9}>
									<div className="review-rating-comment">
										<div className="review-rating">
											<span className="review-menu-item">
												{review.menuItem}
											</span>{' '}
											<Rating rating={review.rating} />
										</div>
										<p className="review-comment">{review.comment}</p>
									</div>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Container>
		</>
	);
}

export default Reviews;
