import React from 'react';
import { PageMainTitle } from '../../styles/ts/components/titles';
import useToast from '../../utils/useToast';

export default function Login() {
	const { success, contextHolder } = useToast();
	return (
		<>
			{contextHolder}
			<PageMainTitle>로그인</PageMainTitle>
			<button onClick={() => success('성공입니다.')}></button>
		</>
	);
}
