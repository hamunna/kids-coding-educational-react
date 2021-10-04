import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.css';

const Home = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('./services-db.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<>
			<div id="home-section">

				<div id="home-overlay" className="d-flex align-items-center">
					<div className="container">
						<div id="home-content">
							<h6>Your Kid, Our Kid.</h6>
							<h1 className="text-uppercase">The Smarter Way to Learn Code<br />For Your Smartest Kid.</h1>
							<p>Coding helps children with communication, creativity, math, writing, and confidence.</p>
						</div>
					</div>
				</div>

			</div>

			{/* Service Section */}
			<div className="container my-5">
				<h2 className="my-5 text-center fw-bold">Our Services</h2>

				<div className="row row-cols-1 row-cols-md-2 g-4">

					{/* Service Section */}
					{
						services.slice(0, 4).map(service => <ServiceCard
							key={service.id}
							service={service}
						></ServiceCard>)
					}
				</div>
			</div>

			{/* Form Section */}
			<ContactForm></ContactForm>
		</>
	);
};

export default Home;