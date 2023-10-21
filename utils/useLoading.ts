import { loadingState } from '../lib/store/common';
import { useSetRecoilState, useRecoilValue } from 'recoil';

const useLoading = () => {
	const setLoading = useSetRecoilState(loadingState);
	const isShow = useRecoilValue(loadingState);

	const showLoading = () => setLoading(true);
	const hideLoading = () => setLoading(false);

	return { showLoading, hideLoading, isShow };
};

export default useLoading;
