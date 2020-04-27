import React from 'react';
import { Link } from 'gatsby';

export default () => (
	<div>
		<Link to="/">Home</Link>
		<Link to="/blog">Blog</Link>
		<Link to="/projects">Projects</Link>
		<Link to="/about-me">About Me</Link>
		<Link to="/contact-me">Contact Me</Link>
	</div>
);
