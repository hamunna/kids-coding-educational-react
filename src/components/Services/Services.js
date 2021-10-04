import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('./services-db.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div className="container">
			<h2 className="my-5 text-center fw-bold">Our Services</h2>

			<div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
				{
					services.map(service => <ServiceCard service={service}></ServiceCard>)
				}
			</div>

		</div>
	);
};

export default Services;