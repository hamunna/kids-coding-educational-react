import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
	const { image, name, price, category, lesson } = props.service;

	return (
		<div className="col">
			<div className="card h-100">
				<img src={image} className="card-img-top" style={{height: '300px'}} alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<h2 className="text-common-chocolate mb-0">${price}</h2>
					<h6 className="text-secondary mt-0">Monthly</h6>
				</div>
				<div className="card-footer">
				<h6 className="text-secondary"><small>{category} | {lesson} Lessons</small></h6>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;