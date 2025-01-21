import React from "react";

export function YouTube() {
	return (
		<>
			<h5 className="pb-4">
				The Health Benefits of Yoga - How Yoga Helps You Stay Healthy | Sadhguru
			</h5>
			<div style={{width:"fit-content", justifySelf: "center" }}>
				<iframe
					className="mb-5"
					width="653"
					height="367"
					src="https://www.youtube.com/embed/-2IcOOUqNgI"
					title="The Health Benefits of Yoga - How Yoga Helps You Stay Healthy | Sadhguru"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		</>
	);
}
