import axios from 'axios';

const http = axios.create({
	baseURL: '',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

http.interceptors.request.use(
	(config) => {
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
