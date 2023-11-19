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
	const pathNameStartsWith = (url: string) => {
		return route.pathname.startsWith(url);
	};

	return { movePage, moveToBack, reload, pathNameStartsWith };
};

export default useRouterHook;
