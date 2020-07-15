import React from 'react';
import { NavLink } from 'react-router-dom';

const routeText = 'item';
const linkText = 'Subject';

const Nav = () => (
	<nav>
		<NavLink to="/">Home</NavLink>
		<NavLink to={`/${routeText}s`}>{`${linkText}s`}</NavLink>
		<NavLink to={`/create - ${routeText}`}>Create {`${linkText}s`}</NavLink>
	</nav>
);

export default Nav;
