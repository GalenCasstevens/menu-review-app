import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar as fasStar,
	faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function RestaurantList() {
	return (
		<ListGroup id="restaurant-list">
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Legal Remedy{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={faStarHalfStroke} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							402 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">129 Oakland Ave, Rock Hill, SC 29730</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">American</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Brews</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Burgers & Barley{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={faStarHalfStroke} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							122 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">111 Cherry Rd, Rock Hill, SC 29732</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">American</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Brews</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Catering</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Charanda Mexican Grill{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={farStar} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							150 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">
					2260 Cross Pointe Dr #96, Rock Hill, SC 29730
				</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">Mexican</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Sandwiches</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Seafood</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Sila Thai{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={faStarHalfStroke} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							76 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">
					979 N Anderson Rd, Rock Hill, SC 29730
				</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">Asian</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Thai</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Rock Hill Diner{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={farStar} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							90 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">2254 Cherry Rd, Rock Hill, SC 29732</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">American</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Diner</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Breakfast</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Empire State Pizza & Deli{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={farStar} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							69 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">2700 8th Ave, Garden City, CO 80631</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">Pizza</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Parties</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Brews</Badge>
					</span>
				</div>
			</ListGroup.Item>
			<ListGroup.Item>
				<h5 className="restaurant-name">
					Nishie G's Cafe{' '}
					<span className="restaurant-rating">
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={fasStar} />
						<FontAwesomeIcon icon={farStar} />
					</span>
					<span className="num-reviews">
						<Badge bg="primary" className="float-end">
							14 Reviews
						</Badge>
					</span>
				</h5>
				<p className="restaurant-addr">111 Cherry Rd, Rock Hill, SC 29732</p>
				<div className="restaurant-facilities">
					<span className="facility-item">
						<Badge bg="primary">American</Badge>
					</span>
					<span className="facility-item">
						<Badge bg="primary">Greek</Badge>
					</span>
				</div>
			</ListGroup.Item>
		</ListGroup>
	);
}

export default RestaurantList;
