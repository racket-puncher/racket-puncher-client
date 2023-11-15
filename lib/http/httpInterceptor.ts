import axios from 'axios';

const http = axios.create({
	baseURL: 'http://3.38.50.101:8080',
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
		return res.data;
	}
	// (ignore) => {}
);

export default http;
