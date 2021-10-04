import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="bg-secondary text-white">
			<div className="container">
				<div className="d-flex justify-content-between pt-4">
					<div>
						<p><small><strong>&copy; Copyright &bullet 2021, Kids Coding All Rights Reserved.</strong></small></p>
					</div>

					<div id="social-icons">
						<div id="nav-social-icon">
							<span className="social-icon">
								<SocialIcon url="https://facebook.com/" network="facebook" bgColor="#fff" style={{ height: 25, width: 25 }} />

							</span>

							<span className="mx-3">
								<SocialIcon url="https://twitter.com/" network="twitter" bgColor="#fff" style={{ height: 25, width: 25 }} />
							</span>

							<span className="social-icon">
								<SocialIcon network="linkedin" bgColor="#fff" style={{ height: 25, width: 25 }} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;