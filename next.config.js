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
	basePath: '/racket-puncher-client',
	assetPrefix: 'https://racket-puncher.github.io/racket-puncher-client/',
};
