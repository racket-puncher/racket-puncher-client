import { useRouter } from 'next/router';

const useRouterHook = () => {
	const route = useRouter();
	const movePage = (url: string) => {
		route.push(url);
	};
	const moveToBack = () => {
		route.back();
	};
	const reload = () => {
		route.reload();
	};
	const replace = (url: string) => {
		route.replace(url);
	};
	const pathNameStartsWith = (url: string) => {
		return route.pathname.startsWith(url);
	};

	const getPathName = () => {
		return route.pathname;
	};

	const getQueryPathName = () => {
		return route.query;
	};
	return {
		movePage,
		moveToBack,
		reload,
		replace,
		pathNameStartsWith,
		getPathName,
		getQueryPathName,
	};
};

export default useRouterHook;
