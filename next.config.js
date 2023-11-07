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
	webpack: (config) => {
		config.output.publicPath = '/racket-puncher-client/';
		return config;
	},
	assetPrefix: 'https://racket-puncher.github.io/racket-puncher-client/',
};
