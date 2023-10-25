import React, { useState } from 'react';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import styled from 'styled-components';
import ModalBox from '../../components/common/modal';
import { v4 as uuidv4 } from 'uuid';

export default function Login() {
	// const { success, contextHolder } = useToast();
	const [isModalOpenVisible, setIsModalOpenVisible] = useState(false);
	const toggleModal = () => {
		setIsModalOpenVisible((prev) => !prev);
	};

	const modalIsOk = () => {
		console.log('확인');
	};

	const modalIsCancel = () => {
		console.log('취소');
	};

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
			<button onClick={toggleModal}>클릭</button>
			<ModalBox
				title={'test'}
				isOpen={isModalOpenVisible}
				toggleModal={toggleModal}
				onOk={modalIsOk}
				onCancel={modalIsCancel}
				footerButtons={[
					<button key={uuidv4()} onClick={toggleModal}>
						확인
					</button>,
				]}>
				<p>모달 테스트</p>
			</ModalBox>
		</>
	);
}

const InputContainer = styled.div`
	margin-top: 50px;
`;
