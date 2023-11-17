import { atom } from 'recoil';

export const loadingState = atom({
	key: 'loadingState',
	default: false,
});

export const messageValueState = atom({
	key: 'messageValueState',
	default: {
		isHandle: true,
		type: 'success',
		message: '테스트',
	},
});
