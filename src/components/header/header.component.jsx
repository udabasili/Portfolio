import React from 'react';
import './header.styles.css';

const Header = () => (
	<React.Fragment>
		<nav className="navigation-container">
			<ul className="navigation-list">
				<a className="navigation-item" href="#header">
					<li>home</li>
				</a>
				<a className="navigation-item" href="#portfolio">
					<li>projects</li>
				</a>
				<a className="navigation-item" href="#bio">
					<li>contact</li>
				</a>
			</ul>
		</nav>
	</React.Fragment>
);

export default Header;
