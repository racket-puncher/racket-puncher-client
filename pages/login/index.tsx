import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { RoundButton } from '../../styles/ts/components/buttons';
import { ImageBox } from '../../styles/ts/components/box';
import { PrimaryColor } from '../../styles/ts/common';
import useRouterHook from '../../utils/useRouterHook';
import { PageMainTitle } from '../../styles/ts/components/titles';
import ModalBox from '../../components/common/modal';
import { InputBox } from '../../styles/ts/components/input';
import { InputErrorText } from '../../styles/ts/components/text';

interface FormData {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().required('이메일은 필수입니다.'),
	password: yup.string().required('비밀번호는 필수입니다.'),
});

export default function Login() {
	const { movePage } = useRouterHook();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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

	const clickLoginBtn = (data: FormData) => {
		console.log(data);
	};

	return (
		<>
			<LoginViewContainer>
				<form onSubmit={handleSubmit(clickLoginBtn)}>
					<PageMainTitle>로그인</PageMainTitle>
					<InputContainer>
						<InputBox>
							<label htmlFor='loginEmail'>이메일</label>
							<input id='loginEmail' {...register('email')} />
							<InputErrorText>{errors.email?.message}</InputErrorText>
						</InputBox>
						<InputBox>
							<label htmlFor='loginPwd'>비밀번호</label>
							<input id='loginPwd' type={'password'} {...register('password')} />
							<InputErrorText>{errors.password?.message}</InputErrorText>
						</InputBox>
					</InputContainer>

					<UnderLineBox>
						<UnderLineTexts>아이디찾기</UnderLineTexts>
						<UnderLineTexts>비밀번호 찾기</UnderLineTexts>
					</UnderLineBox>

					<ButtonContainer>
						<ButtonBox>
							<RoundButton colorstyle={'is-black'} type={'submit'}>
								로그인
							</RoundButton>
						</ButtonBox>
						<ButtonBox>
							<RoundButton colorstyle={'is-yellow'}>
								<div className='align-box'>
									<ImageBox width={'15px'} height={'14px'}>
										<img src='/images/kakao-icon.png' alt='kakao-icon' />
									</ImageBox>
									<p>카카오 로그인</p>
								</div>
							</RoundButton>
						</ButtonBox>
					</ButtonContainer>
				</form>

				<BottomUnderLineBox>
					<p>아이디가 없으신가요?</p>
					<UnderLineTexts onClick={() => movePage('/register')}>회원가입하기</UnderLineTexts>
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
			</LoginViewContainer>
		</>
	);
}

const LoginViewContainer = styled.div`
	margin-top: 50px;
`;

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
