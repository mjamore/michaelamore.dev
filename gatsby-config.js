/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'michaelamore.dev',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-eslint',
		// 'gatsby-transformer-remark',
		// {
		//   resolve: 'gatsby-source-filesystem',
		//   options: {
		//     name: 'files',
		//     path: `${__dirname}/src/markdown`
		//   }
		// }
	],
};
