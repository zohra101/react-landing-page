// import { React } from "react";
// import { YogaDiscountCode } from "../Views/YogaDiscountCode.js";

export function resolveServerResponse(resolve) {
    console.log("Inside the parseResponse function");
	setTimeout(activateResolve, 2000);
	function activateResolve() {
         console.log("Inside the activateResolve function");
		const response = {
			message:
				"You're now subscribed to the 5Elements blog. Your discount code, SAVE20YOGA, is valid for 20% off your next purchase.",
		};
		const finalResponse = JSON.stringify(response);
		resolve(finalResponse);
	}
} 

