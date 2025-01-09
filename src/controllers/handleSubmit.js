import { output } from "../utils/output.js";


export function handleSubmit (event = new Event(submit)) {
    event.preventDefault();
    const inputs = event.target.elements;
    // const nameInput = inputs[0];
    // const name = nameInput.value;
    const emailInput = inputs[1];
    const email = emailInput.value;

    window.spinner.innerHTML = "<div class='spinner-border text-primary'></div>";
    output("<br>" + "<h5>Submitting for " + email + "...</h5><br>");

    function clearSpinner() {
        setTimeout(window.spinner.innerHTMLHTML="",500)
    }
   
}
