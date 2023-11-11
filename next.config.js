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
	// basePath: process.env.NODE_ENV === 'production' ? '/racket-puncher.shop' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/racket-puncher-client/' : '',
	trailingSlash: true,
};
