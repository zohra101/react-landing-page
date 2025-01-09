import { createRoot } from "react-dom/client";
import React from "react";
// import { handleSubmit } from "../src/controllers/handleSubmit.js";

const root = createRoot(window.bodyTag);
root.render(
	<main>
		<h1>Private Yoga Session with Alex</h1>
		<hr />
		<h2 id="bookPrivate">Book a Private</h2>
		<form onSubmit={handleSubmit}>
			<p>
				Name
				<br />
				<label for="clientName"></label>
				<input id="clientName" type="text" name="clientName" />
			</p>
			<p>
				Phone Number
				<br />
				<label for="clientPhone"></label>
				<input id="clientPhone" type="phone" name="clientPhone" />
			</p>
			<p>
				Email
				<br />
				<label for="clientEmail"></label>
				<input id="clientEmail" type="email" name="clientEmail" />
			</p>
			<p>Session Length</p>
			<label for="sessionLen30"></label>
			<input id="sessionLen30" type="radio" name="sessionLength" />
			30 minutes
			<br />
			<label for="sessionLen45"></label>
			<input id="sessionLen45" type="radio" name="sessionLength" />
			45 minutes
			<br />
			<label for="sessionLen60"></label>
			<input id="sessionLen60" type="radio" name="sessionLength" />
			60 minutes
			<br />
			<label for="discountCode"></label>
			<input id="discountCode" type="text" name="discountCode" />
			60 minutes
			<br />
			<p>
				By submitting this form, you consent to receive emails and texts from 5
				Elements Movement Arts, primarily for communicating schedule
				information. We may occasionally send special offers or annoucements of
				new classes and services.
			</p>
			<p>
				<button type="submit">Schedule</button>
			</p>
		</form>
	</main>
);
