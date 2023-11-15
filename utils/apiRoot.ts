import axios from 'axios';

export const apiRoot = axios.create({
	baseURL: 'https://api.racket-puncher.shop',
});
