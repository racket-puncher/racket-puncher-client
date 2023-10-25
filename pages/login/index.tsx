import React, { useState } from 'react';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import styled from 'styled-components';
import ModalBox from '../../components/common/modal';
import { v4 as uuidv4 } from 'uuid';
import { RoundButton } from '../../styles/ts/components/buttons';
import { ImageBox } from '../../styles/ts/components/box';
import { PrimaryColor } from '../../styles/ts/common';

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

			<UnderLineBox>
				<UnderLineTexts>아이디찾기</UnderLineTexts>
				<UnderLineTexts>비밀번호 찾기</UnderLineTexts>
			</UnderLineBox>

			<ButtonContainer>
				<ButtonBox>
					<RoundButton type={'is-black'}>로그인</RoundButton>
				</ButtonBox>
				<ButtonBox>
					<RoundButton type={'is-yellow'}>
						<div className='align-box'>
							<ImageBox width={'15px'} height={'14px'}>
								<img src='/images/kakao-icon.png' alt='kakao-icon' />
							</ImageBox>
							<p>카카오 로그인</p>
						</div>
					</RoundButton>
				</ButtonBox>
			</ButtonContainer>

			<BottomUnderLineBox>
				<p>아이디가 없으신가요?</p>
				<UnderLineTexts>회원가입하기</UnderLineTexts>
			</BottomUnderLineBox>

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

const ButtonContainer = styled.div`
	margin-top: 40px;
`;

const ButtonBox = styled.div`
	margin-bottom: 20px;
`;

const UnderLineBox = styled.div`
	display: flex;
	gap: 15px;
	justify-content: flex-end;
`;

const UnderLineTexts = styled.p`
	text-decoration: underline;
	color: ${PrimaryColor};
	cursor: pointer;
`;

const BottomUnderLineBox = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
`;
