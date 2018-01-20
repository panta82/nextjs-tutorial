import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Show = ({ url, show }) => {
	return (
		<Layout url={url}>
			<h1>{show.name}</h1>
			<div dangerouslySetInnerHTML={{ __html: show.summary }} />
			<img src={show.image.medium} />
		</Layout>
	);
};

Show.getInitialProps = context => {
	return fetch('https://api.tvmaze.com/shows/' + context.query.id)
		.then(res => res.json())
		.then(show => {
			return { show };
		});
};

export default Show;
