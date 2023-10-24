import { message } from 'antd';

const useToast = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const success = (message: string) => {
		messageApi.open({
			type: 'success',
			content: message,
		});
	};

	const error = (message: string) => {
		messageApi.open({
			type: 'error',
			content: message,
		});
	};

	const warning = (message: string) => {
		messageApi.open({
			type: 'warning',
			content: message,
		});
	};

	return { success, error, warning, contextHolder };
};

export default useToast;
