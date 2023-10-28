import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputBox } from '../../styles/ts/components/input';
import { InputErrorText } from '../../styles/ts/components/text';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { onlyNumber } from '../../utils/fomatter';

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
	phoneNumber: yup.string().required('휴대폰 번호는 필수입니다.'),
	certifyNumber: yup.string().required('인증번호는 필수입니다.'),
});

export default function FindPwd() {
	const [emailValue, setEmailValue] = useState('');

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const [certifyInputValue, setCertifyInputValue] = useState('');
	const [timer, setTimer] = useState(5);

	const [isClickCheckBtn, setIsClickCheckBtn] = useState(false);

	const [isClickNextBtn, setIsClickNextBtn] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
	};

	const checkCertifyNum = () => {
		setIsClickCheckBtn(true);
	};

	const clickNextBtn = () => {
		setIsClickNextBtn(true);
	};

	// 인증번호 받기
	const getVerificatoin = () => {
		try {
			setCertifyNumVisible(true);
			console.log('dd');
			setCertTimer();
		} catch (e) {
			console.log(e);
		}
	};

	// 인증번호 타이머
	const setCertTimer = () => {
		const interval = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 0) {
					clearInterval(interval);
					setCertifyInputValue('');
					return 0;
				} else {
					return prevTimer - 1;
				}
			});
		}, 1000);
	};

	return (
		<>
			<FindPwdViewContainer>
				<PageMainTitle>비밀번호 찾기</PageMainTitle>

				<InputContainer>
					<InputBox>
						<label htmlFor='findPwdEmail'>이메일</label>
						<input id='findPwdEmail' {...register('email')} onChange={handleEmailChange} />
						{errors.email?.message && <InputErrorText>{errors.email.message}</InputErrorText>}
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='findPwdPhoneNum'>휴대폰 번호</label>
							<input
								id='findPwdPhoneNum'
								type={'text'}
								maxLength={11}
								{...register('phoneNumber')}
								onChange={(e) => onlyNumber(e)}
							/>
							{errors.phoneNumber?.message && (
								<InputErrorText>{errors.phoneNumber.message}</InputErrorText>
							)}
						</InputBox>
						<SquareButton height={'50px'} onClick={getVerificatoin}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>

					{certifyNumVisible && (
						<InputButtonBox>
							<InputBox certify='true'>
								<label htmlFor='findPwdCertifyNum'>인증 번호</label>
								<input
									id='findPwdCertifyNum'
									type={'text'}
									maxLength={6}
									{...register('certifyNumber')}
									onChange={(e) => onlyNumber(e)}
								/>
								<span className={'limit-time'}>
									{String(Math.floor(timer / 60)).padStart(2, '0')}:
									{String(timer % 60).padStart(2, '0')}
								</span>
								{errors.certifyNumber?.message && (
									<InputErrorText>{errors.certifyNumber.message}</InputErrorText>
								)}
							</InputBox>
							<SquareButton
								height={'50px'}
								disabled={!watch('certifyNumber')}
								onClick={checkCertifyNum}>
								확인
							</SquareButton>
						</InputButtonBox>
					)}
				</InputContainer>

				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						onClick={() => handleSubmit(clickNextBtn)}
						disabled={!watch[('email', 'phoneNumber', 'certifyNumber')]}>
						다음
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
