import React from 'react';
import logo from '../../logo.png';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faClock, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const phone = <FontAwesomeIcon icon={faPhoneSquare} />
const time = <FontAwesomeIcon icon={faClock} />
const address = <FontAwesomeIcon icon={faLocationArrow} />

// const fb = <FontAwesomeIcon icon={fasocial} />



const Header = () => {
	return (
		<header>

			<div id="top-bar">

				<div className="container d-flex justify-content-between align-items-center">
					<div id="brand-logo">
						<img className="img-fluid" src={logo} alt="" />
					</div>

					<div id="header-address" className="d-flex">

						<div className="header-call-us d-flex align-items-center">
							<div className="contact-icons">
								{phone}
							</div>

							<div className="mt-4">
								<h5> Call Us</h5>
								<p>+8801700000000</p>
							</div>
						</div>

						<div className="header-call-us  d-flex align-items-center">
							<div className="contact-icons">
								{time}
							</div>

							<div className="mt-4">
								<h5>Business Hour</h5>
								<p>Sat - Thu 9am - 5pm</p>
							</div>
						</div>

						<div className="header-call-us  d-flex align-items-center">
							<div className="contact-icons">
								{address}
							</div>

							<div className="mt-4">
								<h5>Location</h5>
								<p>Zindabazar, Sylhet</p>
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* NavBar Start */}

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse fw-bold" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to="/home" className="nav-link active">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">About Us</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">Contact Us</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/services" className="nav-link">Our Services</NavLink>
							</li>
						</ul>
					</div>

					<div id="social-icons">
						<div id="nav-social-icon">
							<span className="social-icon">
								<SocialIcon url="https://facebook.com/" network="facebook" bgColor="chocolate" style={{ height: 35, width: 35 }} />
							</span>

							<span className="mx-4">
								<SocialIcon url="https://twitter.com/" network="twitter" bgColor="chocolate" style={{ height: 35, width: 35 }} />
							</span>

							<span className="social-icon">
								<SocialIcon url="https://linkedin.com/" network="linkedin" bgColor="chocolate" style={{ height: 35, width: 35 }} />
							</span>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;