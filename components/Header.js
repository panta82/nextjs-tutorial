import Link from 'next/link';

const splitterStyle = {
	marginLeft: '5px',
	marginRight: '5px'
};
const HeaderSplitter = () => <span style={splitterStyle}>|</span>;

const HeaderLink = ({ href, title, url }) => {
	const current = href === url.pathname;
	if (current) {
		return <strong>{title}</strong>;
	}
	return <Link href={href}>{title}</Link>;
};

const headerStyle = {
	background: '#b7d9e3',
	borderBottom: '2px solid hsl(193.6, 43.9%, 70.4%)',
	padding: 20
};

const Header = ({ url }) => {
	return (
		<header style={headerStyle}>
			<HeaderLink href="/" title="Home" url={url} />
			<HeaderSplitter />
			<HeaderLink href="/about" title="About" url={url} />
		</header>
	);
};

export default Header;
