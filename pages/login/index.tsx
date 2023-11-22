import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import KakaoLogin from 'react-kakao-login';

import { RoundButton } from '../../styles/ts/components/buttons';
import { ImageBox } from '../../styles/ts/components/box';
import { PrimaryColor } from '../../styles/ts/common';
import useRouterHook from '../../utils/useRouterHook';
import { PageMainTitle } from '../../styles/ts/components/titles';
import ModalBox from '../../components/common/modal';
import { InputBox } from '../../styles/ts/components/input';
import { InputErrorText } from '../../styles/ts/components/text';
import { prefix } from '../../constants/prefix';
import AuthService from '../../service/auth/service';
import useCookies from '../../utils/useCookies';
import useToast from '../../utils/useToast';

import PlayerCard from 'components/common/playerCard';
import UserInfoModal from 'components/common/playerCard/userInfoModal';

interface FormData {
	readonly email: string;
	readonly password: string;
}

const schema = yup.object().shape({
	email: yup
		.string()
		.required('이메일은 필수입니다.')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'이메일 형식이 올바르지 않습니다.'
		),
	password: yup.string().required('비밀번호는 필수입니다.'),
	// .matches(
	// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
	// 	'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
	// ),
});
export default function Login() {
	const { movePage } = useRouterHook();
	const { setCookie } = useCookies();
	const { setMessage } = useToast();

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

	// 로그인
	const clickLoginBtn = async (data: FormData) => {
		try {
			const res = await AuthService.login(data);
			setCookie('accessToken', res.data.accessToken, { expires: 7 });
			setCookie('refreshToken', res.data.refreshToken);
			setCookie('id', res.data.id);
			movePage('/main');
		} catch (e) {
			console.log(e);
			setMessage('error', e.response.data.message);
		}
	};

	// 소셜로그인 --------------------------------------
	const postSocialLogin = (res) => {
		console.log(res);
		const accessToken = res.response.accessToken;
		movePage('/main');
	};

	return (
		<>
			<LoginViewContainer>
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
					<UnderLineTexts onClick={() => movePage('/findId')}>아이디찾기</UnderLineTexts>
					<UnderLineTexts onClick={() => movePage('/findPwd')}>비밀번호 찾기</UnderLineTexts>
				</UnderLineBox>

				<ButtonContainer>
					<ButtonBox>
						<RoundButton colorstyle={'is-black'} onClick={handleSubmit(clickLoginBtn)}>
							로그인
						</RoundButton>
					</ButtonBox>
					<ButtonBox>
						<KakaoLogin
							token={'20bd45f114aff9ec8fee730fe2453f5c'}
							onSuccess={postSocialLogin}
							onFail={console.error}
							onLogout={console.info}
							render={({ onClick }) => {
								return (
									<RoundButton
										colorstyle={'is-yellow'}
										onClick={(e) => {
											e.preventDefault();
											onClick();
										}}>
										<div className='align-box'>
											<ImageBox width={'15px'} height={'14px'}>
												<img src={`${prefix}/images/kakao-icon.png`} alt='kakao-icon' />
											</ImageBox>
											<p>카카오 로그인</p>
										</div>
									</RoundButton>
								);
							}}
						/>
					</ButtonBox>
				</ButtonContainer>

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
			<PlayerCard userNickname='뉴뉴' siteUserId='2'></PlayerCard>
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
