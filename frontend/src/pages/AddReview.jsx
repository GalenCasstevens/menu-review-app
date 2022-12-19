import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantData from '../data/RestaurantData';

function AddReview() {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState([]);

	useEffect(() => {
		setRestaurant(RestaurantData.restaurants.find((x) => x._id === id));
	}, []);

	return (
		<div id="add-review-page">
			<h2 id="add-review-title">{restaurant.name}</h2>
			<hr className="title-hr" />
			<Form>
				<Form.Group className="mb-3" controlId="formBasicDishName">
					<Form.Label>Dish</Form.Label>
					<Form.Control required type="text" placeholder="Enter dish name" />
				</Form.Group>

				<Form.Group
					id="review-rating-fg"
					className="mb-3"
					controlId="formBasicReviewComment"
				>
					<Form.Label>Rating</Form.Label>
					<Form.Select aria-label="Default select example">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option selected value="5">
							5
						</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicImageUrl">
					<Form.Label>Image URL</Form.Label>
					<Form.Control required type="text" placeholder="Enter image URL" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicReviewComment">
					<Form.Label>Comment</Form.Label>
					<Form.Control
						required
						as="textarea"
						rows={5}
						placeholder="Enter comment"
					/>
				</Form.Group>

				<div className="d-grid gap-2">
					<Button id="login-btn" variant="primary" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default AddReview;
