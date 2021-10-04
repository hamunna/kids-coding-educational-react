import React from 'react';
import aboutImg from '../../images/about-main.jpg';
import teachingImg from '../../images/teaching-method.jpg';

const About = () => {
	return (
		<div className="container">
			<h2 className="text-center my-5 fw-bold">About Us</h2>

			{/* Our Mission and Vission Section */}
			<div className="row my-5">

				<div className="col">
					<h3>Our Mission &amp; Vission</h3>
					<p>Our mission is to expand and continually improve utilizing quality practices and employee involvement to manufacture surface finishing systems, for the production manufacturing industry, both in the domestic and international markets, that result in customer and employee satisfaction.</p>

					<h3>Our Kid Care Strategies</h3>
					<ul>
						<li>To provide the highest quality teaching possible through our highly skilled and dedicated programming teachers.</li>

						<li>To pursue an aggressive, outgoing research and development program thus insuring our courses with best features.</li>

						<li>To provide the highest standards of service available through our highly trained, domestic and international field representatives</li>
					</ul>
				</div>
				<div className="col">
					<img className="img-fluid" src={aboutImg} alt="" />
				</div>
			</div>

			{/* Teaching Methods Section */}
			<div className="row my-5">

				<div className="col">
					<img className="img-fluid" src={teachingImg} alt="" />
				</div>

				<div className="col">
					<h3>We believe in Standard Education</h3>
					<p>Our mission is to expand and continually improve utilizing quality practices and employee involvement to manufacture surface finishing systems, for the production manufacturing industry, both in the domestic and international markets, that result in customer and employee satisfaction.</p>

					<h3>Our Teaching Methods</h3>
					<ul>
						<li>To provide the highest quality teaching possible through our highly skilled and dedicated programming teachers.</li>

						<li>To pursue an aggressive, outgoing research and development program thus insuring our courses with best features.</li>

						<li>To provide the highest standards of service available through our highly trained, domestic and international field representatives</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;