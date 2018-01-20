import Link from 'next/link';

import Layout from '../components/Layout';

export default ({ url }) => (
	<Layout url={url}>
		<h1>About</h1>
		<p>This is an about page</p>
	</Layout>
);
