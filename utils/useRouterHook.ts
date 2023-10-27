import { useRouter } from 'next/router';

const useRouterHook = () => {
	const route = useRouter();
	const movePage = (url: string) => {
		route.push(url);
	};
	const moveToBack = () => {
		route.back();
	};
	const pathNameStartsWith = (url: string) => {
		return route.pathname.startsWith(url);
	};
	return { movePage, moveToBack, pathNameStartsWith };
};

export default useRouterHook;
