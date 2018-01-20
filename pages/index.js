import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const Index = ({ url, shows }) => {
	return (
		<Layout url={url}>
			<h1>Batman shows</h1>
			<p>
				List of batman shows. Based on{' '}
				<a
					target="_blank"
					href="https://learnnextjs.com/basics/fetching-data-for-pages/fetching-batman-shows"
				>
					next.js tutorial
				</a>
			</p>

			<hr />
			<ul>
				{shows.map(({ show }) => (
					<li key={show.id}>
						<Link as={`/shows/${show.id}`} href={`/show?id=${show.id}`}>
							<a>{show.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

Index.getInitialProps = () => {
	return fetch('https://api.tvmaze.com/search/shows?q=batman')
		.then(res => res.json())
		.then(shows => {
			return { shows };
		});
};

export default Index;
