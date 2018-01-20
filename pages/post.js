import Layout from '../components/Layout';

const Post = ({ url }) => {
	return (
		<Layout url={url}>
			<h1>{url.query.title}</h1>
			<p>Something...?</p>
		</Layout>
	);
};

export default Post;
