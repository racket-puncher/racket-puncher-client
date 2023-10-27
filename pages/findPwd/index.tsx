import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputBox } from '../../styles/ts/components/input';
import { InputErrorText } from '../../styles/ts/components/text';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { PageMainTitle } from '../../styles/ts/components/titles';

// interface FormData {
// 	email?: string;
// 	phone?: string;
// 	certifyNum?: string;
// 	password?: string;
// 	rePassword?: string;
// }

const schema = yup.object().shape({
	email: yup
		.string()
		.required('이메일은 필수입니다.')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'이메일 형식이 올바르지 않습니다.'
		),
	password: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
	rePassword: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
});

export default function FindPwd() {
	const [emailValue, setEmailValue] = useState('');

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const [certifyInputValue, setCertifyInputValue] = useState('');
	const [isClickCheckBtn, setIsClickCheckBtn] = useState(false);

	const [isClickNextBtn, setIsClickNextBtn] = useState<boolean>(false);

	const {
		register,
		// handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
	};

	const sendCertifyNumBtn = () => {
		setCertifyNumVisible(true);
	};

	const handleCertifyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCertifyInputValue(event.target.value);
	};

	const checkCertifyNum = () => {
		setIsClickCheckBtn(true);
	};

	const clickNextBtn = () => {
		setIsClickNextBtn(true);
	};

	return (
		<>
			<FindPwdViewContainer>
				<PageMainTitle>{isClickNextBtn ? '비밀번호 변경' : '비밀번호 찾기'}</PageMainTitle>

				{isClickNextBtn ? (
					<>
						<InputContainer>
							<InputBox>
								<label htmlFor='changePwd'>신규 비밀번호</label>
								<input id='changePwd' type={'password'} {...register('password')} />
								<InputErrorText>{errors.password?.message}</InputErrorText>
							</InputBox>
							<InputBox>
								<label htmlFor='changeRePwd'>신규 비밀번호 확인</label>
								<input id='changeRePwd' type={'password'} {...register('rePassword')} />
								<InputErrorText>{errors.rePassword?.message}</InputErrorText>
							</InputBox>
						</InputContainer>
					</>
				) : (
					<>
						<InputContainer>
							<InputBox>
								<label htmlFor='findPwdEmail'>이메일</label>
								<input id='findPwdEmail' {...register('email')} onChange={handleEmailChange} />
								<InputErrorText>{errors.email?.message}</InputErrorText>
							</InputBox>

							<InputButtonBox>
								<InputBox>
									<label htmlFor='findPwdPhoneNum'>휴대폰 번호</label>
									<input id='findPwdPhoneNum' type={'number'} />
								</InputBox>
								<SquareButton height={'50px'} onClick={sendCertifyNumBtn}>
									인증번호 전송
								</SquareButton>
							</InputButtonBox>

							{certifyNumVisible && (
								<InputButtonBox>
									<InputBox certify>
										<label htmlFor='findPwdCertifyNum'>인증 번호</label>
										<input
											id='findPwdCertifyNum'
											type={'number'}
											onChange={handleCertifyInputChange}
										/>
										<span className={'limit-time'}>00:00</span>
									</InputBox>
									<SquareButton
										height={'50px'}
										disabled={!certifyInputValue}
										onClick={checkCertifyNum}>
										확인
									</SquareButton>
								</InputButtonBox>
							)}
						</InputContainer>
					</>
				)}

				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						onClick={clickNextBtn}
						disabled={!isClickCheckBtn || !emailValue}>
						{isClickNextBtn ? '비밀번호 변경' : '다음'}
					</RoundButton>
				</ButtonBox>
			</FindPwdViewContainer>
		</>
	);
}

const FindPwdViewContainer = styled.div`
	margin-top: 50px;
`;

const InputContainer = styled.div`
	margin-top: 30px;
`;

const InputButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	.input__InputBox-sc-w6l3ed-0 {
		flex-basis: 380px;
	}

	.buttons__SquareButton-sc-xhpq7c-1 {
		flex-basis: 180px;
		margin-bottom: 20px;
		margin-left: 20px;
	}
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
