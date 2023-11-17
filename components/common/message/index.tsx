import React, { useEffect } from 'react';
import { message } from 'antd';
import { useRecoilValue } from 'recoil';
import { messageValueState } from 'lib/store/common';

export default function MessageBox() {
	const [messageApi, contextHolder] = message.useMessage();
	const messageValue = useRecoilValue(messageValueState);

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

	useEffect(() => {
		if (messageValue.message !== '테스트') {
			switch (messageValue.type) {
				case 'success':
					success(`${messageValue.message}`);
					break;
				case 'error':
					error(`${messageValue.message}`);
					break;
				case 'warning':
					warning(`${messageValue.message}`);
					break;
			}
		}
	}, [messageValue.isHandle]);

	return <>{contextHolder}</>;
}
