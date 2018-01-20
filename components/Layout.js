import Header from './Header';

const layoutStyle = {
	margin: 20,
	padding: 20
};

const Layout = ({ url, children }) => {
	return (
		<div style={layoutStyle}>
			<Header url={url} />
			{children}
		</div>
	);
};

export default Layout;
