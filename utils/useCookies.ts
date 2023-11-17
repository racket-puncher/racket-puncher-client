import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useToast from './useToast';

// 쿠키의 값이 문자열일 경우
type CookieValue = string;

// 쿠키 설정 옵션
interface CookieOptions {
	expires?: number | Date;
	path?: string;
	domain?: string;
	secure?: boolean;
}

// 커스텀 훅 정의
function useCookies() {
	const [cookies, setCookies] = useState<Record<string, CookieValue>>({});

	// 쿠키 읽기
	const getCookie = (key: string): CookieValue | undefined => {
		return cookies[key] || Cookies.get(key);
	};

	const checkLogin = () => {
		const res = getCookie('accessToken');
		return res;
	};

	// 쿠키 설정
	const setCookie = (key: string, value: CookieValue, options?: CookieOptions) => {
		Cookies.set(key, value, options);
		setCookies({ ...cookies, [key]: value });
	};

	// 쿠키 삭제
	const removeCookie = (key: string) => {
		Cookies.remove(key);
		const { [key]: deletedCookie, ...restCookies } = cookies;
		setCookies(restCookies);
	};

	return {
		cookies,
		getCookie,
		checkLogin,
		setCookie,
		removeCookie,
	};
}

export default useCookies;
