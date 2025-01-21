import React from "react";
import { createRoot } from "react-dom/client";
// import { handleClick } from "../src/controllers/handleClick.js";
import { YogaDiscountOffer } from "./Views/YogaDiscountOffer.js";
import { BlogSubscription } from "./Views/BlogSubscription.js";
import { YouTube } from "./Views/YouTube.js";

const root = createRoot(window.bodyTag);

root.render(
	<>
		<header>
			{/* <h1>5 Elements Movement Arts</h1> */}
			<img
				alt="banner"
				width="100%"
				className="rounded"
				src="src\assets\images\dockwithtext.png"
			/>
			<hr />
		</header>
		<main>
			<YogaDiscountOffer />
			<h3 className="mb-4">Private Yoga Session with Alex</h3>
			<div className="container"></div>
			<div className="row">
				<div className="col col-md-2">
					<img
						alt="alex"
						style={{ height: "80%", width: "100%" }}
						className="rounded mb-5 align-content-center"
						title="Alex at Baton Rouge Holi Fest in 2024"
						src="src\assets\images\alex.png"
					/>
				</div>
				<div className="col col col-md-6">
					<h5 id="privateDetails" className="mb-3">
						Private sessions optimize the benefits of yoga.
					</h5>
					<p className="mb-4">
						Private sessions allow yogis to give individuals more time than in
						group classes, so we can provide deeper instruction, customized
						practices to fit your goals and needs, additional variations for
						poses, and new ways to use props. Or we can guide you through
						mediation or savasna for the whole session if that's what your body
						needs that day. Meet yourself where you are!
					</p>
					<h6 className="mb-4">Sessions last 30, 45, or 60 minutes.</h6>
				</div>
				<div className="col col col-md-4 justify-content-start">
					<BlogSubscription />
				</div>
			</div>
			<h5 className="mb-4">
				Book a private yoga session, tailored to your specific needs, today!
			</h5>
			<h3 className="mb-4 p-3">Yoga is for everyone.</h3>
			<p>
				Yoga benefits people of all ages, bodies, and experiences; <b>no</b>
				prior experience is required. And, contrary to popular belief, you don't
				have to be an acrobat or rubber band to do yoga, either.
			</p>
			<p>That's because one of the benefits of yoga is improved flexibility.</p>
			<p className="mb-4">
				A regular yoga practice offers other mental and physical health
				benefits. Watch the video or click on any of the
				<a href="#benefits">benefits</a> below to read more.
			</p>
			<YouTube />
			<h5 id="benefits">What are the benefits of yoga? Here are a few.</h5>
			<p className="mb-5">
				A regular yoga practice offers mental and physical health benefits.
			</p>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<ul className="list-group m-3">
							<li className="list-group-item">
								<a href="#benefit1">
									back pain relief
								</a>
							</li>
							<li className="list-group-item">
								<a href="#benefit2">
									better balance
								</a>
							</li>
							<li className="list-group-item">
								<a href="#benefit3">
									greater strength
								</a>
							</li>
							<li className="list-group-item">
								<a href="#benefit4">
									less stress
								</a>
							</li>
							<li className="list-group-item">
								<a href="#benefit5">
									more energy and focus
								</a>
							</li>
							<li className="list-group-item mb-5">
								<a href="#benefit6">
									relaxation
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-9 justify-content-end mb-5">
						<img
							alt="benefitsOfYoga"
							width="75%"
							className="rounded"
							src="src\assets\images\benefits_of_yoga.png"
						/>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<hr />
			Copyright 2025
			<img
				alt="copyright"
				style={{ height: "15px", width: "15px" }}
				src="src\assets\icons\copyright_cGainsboro_nobg.png"
			/>
			5Elements Movement Arts
		</footer>
	</>
);
