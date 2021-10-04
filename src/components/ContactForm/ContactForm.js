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

					<form class="row g-3">

						<div class="col-md-6">
							<label htmlFor="inputName" class="form-label">Name</label>
							<input type="name" class="form-control" id="inputName" />
						</div>

						<div class="col-md-6">
							<label htmlFor="inputEmail4" class="form-label">Email</label>
							<input type="email" class="form-control" id="inputEmail4" />
						</div>

						<div class="col-md-6">
							<label htmlFor="inputPhone" class="form-label">Phone</label>
							<input type="text" class="form-control" id="inputPhone" />
						</div>

						<div class="col-md-4">
							<label htmlFor="inputState" class="form-label">Pick a Course</label>
							<select id="inputState" class="form-select">
								<option selected>Choose...</option>
								<option>Web Design</option>
								<option>Python</option>
								<option>JavaScript</option>
								<option>C#</option>
								<option>C++</option>
							</select>
						</div>

						<div class="col-12">
							<label htmlFor="inputAddress" class="form-label">Address</label>
							<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
						</div>

						<div class="col-md-6">
							<label htmlFor="inputCity" class="form-label">City</label>
							<input type="text" class="form-control" id="inputCity" />
						</div>

						<div class="col-12">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="gridCheck" />
								<label class="form-check-label" htmlFor="gridCheck">
									Agree to receive mails
								</label>
							</div>
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Review;