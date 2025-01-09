export function YogaDiscountCode(event = new Event(handleSubmit)) {
	let thankYou =
		"Thank you for subscribing to our newsletter! Use the following code to receive your discount:";
	let discountCode = "SAVE20YOGA";

	return (
		<section>
			<h5>{thankYou}</h5>
			<h4>{discountCode}</h4>
		</section>
	);
}
