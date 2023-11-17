import { useRecoilValue, useSetRecoilState } from 'recoil';
import { messageValueState } from '../lib/store/common';

const useToast = () => {
	const setMessageVal = useSetRecoilState(messageValueState);
	const messageValue = useRecoilValue(messageValueState);

	const setMessage = (type: string, message: string) => {
		const payload = {
			isHandle: !messageValue.isHandle,
			type,
			message,
		};
		setMessageVal(payload);
	};

	return { setMessage };
};

export default useToast;
