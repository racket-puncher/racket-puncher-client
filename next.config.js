/** @type {import('next').NextConfig} */

module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/main',
				permanent: true,
			},
		];
	},
	// assetPrefix: process.env.NODE_ENV === 'production' ? '/racket-puncher.shop/' : '',
	trailingSlash: true,
};
