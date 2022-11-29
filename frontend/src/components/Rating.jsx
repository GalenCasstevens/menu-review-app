import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Rating(props) {
    return (
        <span className="restaurant-rating">
            {props.rating < 1 ? <FontAwesomeIcon icon={farStar} /> : <FontAwesomeIcon icon={fasStar} />}
            {props.rating < 2 ? <FontAwesomeIcon icon={farStar} /> : <FontAwesomeIcon icon={fasStar} />}
            {props.rating < 3 ? <FontAwesomeIcon icon={farStar} /> : <FontAwesomeIcon icon={fasStar} />}
            {props.rating < 4 ? <FontAwesomeIcon icon={farStar} /> : <FontAwesomeIcon icon={fasStar} />}
            {props.rating < 5 ? <FontAwesomeIcon icon={farStar} /> : <FontAwesomeIcon icon={fasStar} />}
        </span>
    )
}

export default Rating;