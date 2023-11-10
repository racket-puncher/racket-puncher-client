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
	assetPrefix: 'https://racket-puncher.shop/',
	trailingSlash: true,
};
