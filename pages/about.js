import Link from 'next/link';

export default () => (
	<div>
		<div>
			<Link href="/">
				<a>Home</a>
			</Link>
			{' | '}
			<strong>About</strong>
			<hr />
		</div>
		<h1>About</h1>
		<p>This is an about page</p>
	</div>
);
