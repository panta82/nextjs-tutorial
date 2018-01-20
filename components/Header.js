import Link from 'next/link';

const HeaderSplitter = () => (
	<span>
		|<style jsx>
			{`
				span {
					margin: 0 5px;
				}
			`}
		</style>
	</span>
);

const HeaderLink = ({ href, title, url }) => {
	const current = href === url.pathname;
	if (current) {
		return <strong>{title}</strong>;
	}
	return (
		<Link href={href}>
			<a>{title}</a>
		</Link>
	);
};

const Header = ({ url }) => {
	return (
		<header>
			<HeaderLink href="/" title="Home" url={url} />
			<HeaderSplitter />
			<HeaderLink href="/about" title="About" url={url} />
			<style jsx>{`
				header {
					font-family: 'Arial';
					background: #b7d9e3;
					border-bottom: 2px solid hsl(193.6, 43.9%, 70.4%);
					padding: 20px;
				}
			`}</style>
		</header>
	);
};

export default Header;
