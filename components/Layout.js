import Header from './Header';

const Layout = ({ url, children }) => {
	return (
		<div className="Layout">
			<Header url={url} />
			{children}
			<style jsx>{`
				.Layout {
					margin: 20px;
					padding: 20px;
				}
			`}</style>
			<style jsx global>{`
				body,
				html {
					font-family: 'Arial', sans-serif;
					background-color: hsl(200, 5%, 95%);
				}
			`}</style>
		</div>
	);
};

export default Layout;
