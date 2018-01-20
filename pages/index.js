import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = ({ id, title }) => {
	return (
		<li>
			<Link as={`/p/${id}`} href={`/post?title=${title}`}>
				<a>{title}</a>
			</Link>
		</li>
	);
};

const Index = ({ url }) => {
	return (
		<Layout url={url}>
			<h1>NEXT</h1>
			<p>Hi!</p>

			<hr />

			<h3>My blog posts</h3>
			<ul>
				<PostLink id="a" title="Blog A" />
				<PostLink id="b" title="Blog B" />
				<PostLink id="C" title="Blog C" />
			</ul>
		</Layout>
	);
};

export default Index;
