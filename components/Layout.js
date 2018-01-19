import Header from './Header';

const layoutStyle = {
	margin: 20,
	padding: 20
};

const Layout = ({ children }) => {
	return (
		<div style={layoutStyle}>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
