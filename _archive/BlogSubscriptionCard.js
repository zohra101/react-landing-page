import React from "react";
import { handleSubmit } from "../src/controllers/handleSubmit.js";
import { CardBody } from "../src/utils/CardBody.js";
import { Card } from "../src/utils/Card.js";
import { output } from "../../utils/output.js";

export function BlogSubscription() {
	return (
		<>
        	<h5>Subscribe to our blog:</h5>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="p-2">
						<label htmlFor="name" className="p-2" placeholder="First Last">Your Name </label>
						<input type="text" name="name"></input>
					</div>
					<div className="p-2">
						<label htmlFor="email" className="p-2" placeholder="myemai@domain.com">Your Email </label>
                        <input type="email" name="email"></input>
					</div>
					<div className="p-3">
						<button type="button" class="btn  btn-dark" onClick={handleSubmit}>Subscribe Now for 20% Off!</button>
					</div>
				</form>
			</div>
		</>
	);
}
