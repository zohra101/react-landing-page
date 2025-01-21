// import { React } from "react";
// import { YogaDiscountCode } from "../Views/YogaDiscountCode.js";

export function resolveServerResponse(resolve) {
    debugger;
    console.log("Inside the resolveServerResponse function");
    function activateResolve() {
        debugger;
        const response={
            message:"You're now subscribed to the 5Elements blog."
        }
        const finalResponse = JSON.stringify(response);
        resolve(finalResponse);
    }
} 
