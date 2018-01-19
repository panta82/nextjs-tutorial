import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<div>
				<strong>Home</strong>
				{' | '}
				<Link href="/about">
					<a>About</a>
				</Link>
				<hr />
			</div>

			<h1>NEXT</h1>
			<p>Hi!</p>
		</div>
	);
};

export default Index;
