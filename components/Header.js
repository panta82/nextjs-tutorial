import Link from 'next/link';

const splitterStyle = {
	marginLeft: '5px',
	marginRight: '5px'
};
const HeaderSplitter = () => <span style={splitterStyle}>|</span>;

const HeaderLink = ({ url, title }) => <Link href={url}>{title}</Link>;

const Header = () => {
	return (
		<header>
			<HeaderLink url="/" title="Home" />
			<HeaderSplitter />
			<HeaderLink url="/about" title="About" />
		</header>
	);
};

export default Header;
