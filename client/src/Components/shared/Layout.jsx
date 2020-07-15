import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
	<div>
		<Nav />
		<h1>Items App</h1>

		{props.children}
		<Footer />
	</div>
);

export default Layout;
