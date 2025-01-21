import { output } from "../utils/output.js";

export function parseResponse(resolveValue) {
    console.log("Inside the parseResponse function");
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
}
