import React from 'react';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../components/common/input';
import styled from 'styled-components';

export default function Login() {
	// const { success, contextHolder } = useToast();
	return (
		<>
			<PageMainTitle>로그인</PageMainTitle>
			<InputContainer>
				<InputBox>
					<label htmlFor='loginEmail'>이메일</label>
					<input id='loginEmail' />
				</InputBox>
				<InputBox>
					<label htmlFor='loginPwd'>비밀번호</label>
					<input id='loginPwd' />
				</InputBox>
			</InputContainer>
		</>
	);
}

const InputContainer = styled.div`
	margin-top: 50px;
`;
