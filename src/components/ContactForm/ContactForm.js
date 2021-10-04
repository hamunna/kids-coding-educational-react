import React from 'react';
import './ContactForm.css';

const Review = () => {
	return (
		<div id="reg-form">

			<div id="form-overlay">
				<div className="container fw-bold">

					<div className="text-center fw-bold mb-5">
						<h2>Contact Form</h2>
						<p className="text-secondary">Book a seat for your kid Now!</p>
					</div>

					<form className="row g-3">

						<div className="col-md-6">
							<label htmlFor="inputName" className="form-label">Name</label>
							<input type="name" className="form-control" id="inputName" />
						</div>

						<div className="col-md-6">
							<label htmlFor="inputEmail4" className="form-label">Email</label>
							<input type="email" className="form-control" id="inputEmail4" />
						</div>

						<div className="col-md-6">
							<label htmlFor="inputPhone" className="form-label">Phone</label>
							<input type="text" className="form-control" id="inputPhone" />
						</div>

						<div className="col-md-4">
							<label htmlFor="inputState" className="form-label">Pick a Course</label>
							<select id="inputState" className="form-select">
								<option value="">Choose...</option>
								<option value="Web Design">Web Design</option>
								<option value="Python">Python</option>
								<option value="Javascript">JavaScript</option>
								<option value="C">C#</option>
								<option value="C++">C++</option>
							</select>
						</div>

						<div className="col-12">
							<label htmlFor="inputAddress" className="form-label">Address</label>
							<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
						</div>

						<div className="col-md-6">
							<label htmlFor="inputCity" className="form-label">City</label>
							<input type="text" className="form-control" id="inputCity" />
						</div>

						<div className="col-12">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="gridCheck" />
								<label className="form-check-label" htmlFor="gridCheck">
									Agree to receive mails
								</label>
							</div>
						</div>
						<div className="col-12">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Review;