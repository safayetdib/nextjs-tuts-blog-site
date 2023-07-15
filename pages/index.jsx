import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet
				assumenda est vel doloremque sequi quam quis necessitatibus, quod
				molestiae ut eos fuga. Ipsa nulla consequatur, eveniet assumenda porro
				mollitia esse cupiditate autem maiores quasi eum quam nisi quos. Aliquam
				similique ipsa assumenda placeat perspiciatis velit impedit dignissimos
				ducimus aliquid.
			</p>

			<br />
			<br />

			<Link href="/about">Visit about page</Link>
		</div>
	);
};

export default Home;
