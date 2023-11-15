/** @type {import('next').NextConfig} */

module.exports = {
	env: {
		KAKAO_MAPS_APP_KEY: '20bd45f114aff9ec8fee730fe2453f5c',
	},
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
