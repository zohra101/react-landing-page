import { output } from "../utils/output.js";

export function parseResponse(resolveValue) {
    console.log("Inside the parseResponse function");
    const response = JSON.parse(resolveValue);
        debugger;
    const message = response.message;
}
