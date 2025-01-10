import React from "react";
import { handleSubmit } from "../controllers/handleSubmit.js";

export function BlogSubscription() {
	return (
		<>
			<div className="card w-75 border-dark ">
				<div className="card-body bg-dark text-light text-center">
					<h5 className="card-title">Subscribe to my blog:</h5>
					<form onSubmit={handleSubmit}>
						<div className="p-2">
							<label htmlFor="name" className="p-2">
								Your Name{" "}
							</label>
							<input type="text" name="name" placeholder="First Last"></input>
						</div>
						<div className="p-2">
							<label htmlFor="email" className="p-2">
								Your Email{" "}
							</label>
							<input
								type="email"
								name="email"
								placeholder="myemai@domain.com"></input>
						</div>
						<div className="p-3">
							<button type="submit" className="btn btn-success">
								Subscribe Now
							</button>
						</div>
					</form>
				</div>
			</div>
			<div id="outputTag"></div>
		</>
	);
}
