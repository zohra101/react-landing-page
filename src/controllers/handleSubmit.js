import { output } from "../utils/output.js";
import { resolveServerResponse } from "../modules/resolveServerResponse.js";
import { parseResponse } from "../modules/parseResponse.js";


export function handleSubmit (event = new Event(submit)) {
	event.preventDefault();
	const inputs = event.target.elements;
	// const nameInput = inputs[0];
	// const name = nameInput.value;
	const emailInput = inputs[1];
	const email = emailInput.value;

	window.spinnerTag.innerHTML =
		"<div class='spinner-border text-primary'></div>";

	output(`<br><h5>Submitting for ${email}...</h5><br>`, "submittingTag");
    debugger;
	const promise = new Promise(resolveServerResponse);
	promise.then(parseResponse);
	promise.then(function hideSpinner(resolveValue) {
		// setTimeout((window.spinnerTag.innerHTML = ""), 3000);
        debugger;
		return resolveValue;
	});
}
