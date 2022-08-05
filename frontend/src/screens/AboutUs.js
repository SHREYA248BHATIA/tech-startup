import React from 'react';
import './AboutUs.css';
export default function AboutUs() {
	return (
		<div className="about-us">
			<div class="header">
				<div class="header-mystore">MyStore</div>

				<div class="header-summary">
					MyStore is an American multinational technology company which focuses on e-commerce, cloud
					computing, digital streaming, and artificial intelligence. It has been referred to as "one of the
					most influential economic and cultural forces in the world", and is one of the world's most valuable
					brands. We're a company that obsesses over our customers. Our actions, goals, projects, programs and
					inventions begin and end with the customer top of mind.In other words, we start with the customer
					and work backwards. When we hit on something that is really working for customers, we double-down on
					it with hopes to turn it into an even bigger success.
				</div>

				<div class="scroll-text">Scroll down to see products</div>
			</div>

			<div class="container">
				<section
					class="image"
					style={{
						backgroundImage:
							'url(' +
							'https://images.unsplash.com/photo-1583505093722-15596e9ada6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' +
							')'
					}}
				/>
				<section class="heading">
					<div>Hey, Alexa?</div>
				</section>
				<section class="text" style={{ backgroundColor: '#2980B9' }}>
					<div>Welcome to Prime Video</div>
				</section>
				<section
					class="image"
					style={{
						backgroundImage:
							'url(' +
							'https://images.unsplash.com/photo-1643208589889-faf52730d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' +
							')'
					}}
				/>
				<section class="heading">
					<div>Let's binge watch!</div>
				</section>
				<section class="text" style={{ backgroundColor: '#2980B9' }}>
					<div>Paradise on earth</div>
				</section>
				<section
					class="image"
					style={{
						backgroundImage:
							'url(' +
							'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' +
							')'
					}}
				/>
				<section class="heading colour">
					<div>Over 1 lakh professionals working</div>
				</section>

				<section class="text" style={{ backgroundColor: '#2980B9' }}>
					<div>From, diverse places...</div>
				</section>

				<section
					class="image"
					style={{
						backgroundImage:
							'url(' +
							'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80' +
							')'
					}}
				/>
				<section class="heading">
					<div>Place orders</div>
				</section>
				<section class="text" style={{ backgroundColor: '#2980B9' }}>
					<div>from anywhere now !</div>
				</section>
			</div>
		</div>
	);
}
