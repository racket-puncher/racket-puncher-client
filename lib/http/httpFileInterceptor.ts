import axios from 'axios';

const http = axios.create({
	baseURL: 'http://3.38.50.101:8080',
	timeout: 10000,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
});

const getCookie = (name: string) => {
	const matches = document.cookie.match(
		new RegExp(
			// eslint-disable-next-line no-useless-escape
			'(?:^|; )' + name.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g, '\\$1') + '=([^;]*)'
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

http.interceptors.request.use(
	(config) => {
		if (getCookie('accessToken') !== undefined) {
			config.headers.Authorization = 'Bearer ' + getCookie('accessToken');
		}
		return config;
	}
	// (ignore) => {}
);

http.interceptors.response.use(
	(res) => {
		return res;
	}
	// (ignore) => {}
);

export default http;
