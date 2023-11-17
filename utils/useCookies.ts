import { useState } from 'react';
import Cookies from 'js-cookie';

function useCookies() {
	const [cookies, setCookies] = useState({});

	const getCookie = (key) => {
		return cookies[key] || Cookies.get(key);
	};

	const setCookie = (key, value, options) => {
		Cookies.set(key, value, options);
		setCookies({ ...cookies, [key]: value });
	};

	const removeCookie = (key) => {
		Cookies.remove(key);
		const { [key]: deletedCookie, ...restCookies } = cookies;
		setCookies(restCookies);
	};

	return {
		cookies,
		getCookie,
		setCookie,
		removeCookie,
	};
}

export default useCookies;
