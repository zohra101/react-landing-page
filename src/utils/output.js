export function output(
	message = "",
	outputTag = "outputTag",
	isHTML = false,
	shouldAppend = true
) {debugger;

	if (isHTML) {
		if (shouldAppend) window[outputTag].innerHTML += message;
		else window[outputTag].innerHTML = message;
	} else {
		if (shouldAppend) window[outputTag].textContent += message;
		else window[outputTag].textContent = message;
	}
}


