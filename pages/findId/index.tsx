import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { onlyNumber } from '../../utils/formatter';
import { InputErrorText } from '../../styles/ts/components/text';
import useRouterHook from '../../utils/useRouterHook';

const schema = yup.object().shape({
	phoneNumber: yup.string().required('휴대폰 번호는 필수입니다.'),
	certifyNumber: yup.string().required('인증번호는 필수입니다.'),
});

export default function FindId() {
	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const [isClickCheckBtn, setIsClickCheckBtn] = useState(false);

	const [timer, setTimer] = useState(180);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	const { movePage } = useRouterHook();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// 인증번호확인
	const checkCertifyNum = () => {
		setIsClickCheckBtn(true);
	};

	// 다음버튼 클릭
	const clickNextBtn = () => {
		setCertifyNumVisible(false);
		movePage('/findId/result');
	};

	// 인증번호 타이머
	const setCertTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		const newIntervalId = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 1) {
					clearInterval(newIntervalId);
					setCertifyNumVisible(false);
					return 0;
				} else {
					return prevTimer - 1;
				}
			});
		}, 1000);
		setIntervalId(Number(newIntervalId));
	};

	// 인증번호 받기
	const getVerification = () => {
		try {
			setCertifyNumVisible(true);
			setTimer(180);
			setCertTimer();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<FindIdViewContainer>
				<PageMainTitle>아이디 찾기</PageMainTitle>

				<InputContainer>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='findIdPhoneNum'>휴대폰 번호</label>
							<input
								id='findIdPhoneNum'
								type={'text'}
								maxLength={11}
								{...register('phoneNumber')}
								onChange={(e) => {
									setValue('phoneNumber', onlyNumber(e.target.value));
								}}
							/>
							{errors.phoneNumber?.message && (
								<InputErrorText>{errors.phoneNumber.message}</InputErrorText>
							)}
						</InputBox>
						<SquareButton
							height={'50px'}
							onClick={getVerification}
							disabled={!watch('phoneNumber')}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>

					{certifyNumVisible && (
						<InputButtonBox>
							<InputBox certify='true'>
								<label htmlFor='findIdCertifyNum'>인증 번호</label>
								<input
									id='findIdCertifyNum'
									type={'text'}
									maxLength={6}
									{...register('certifyNumber')}
									onChange={(e) => {
										setValue('certifyNumber', onlyNumber(e.target.value));
									}}
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
						onClick={handleSubmit(clickNextBtn)}
						disabled={!isClickCheckBtn}>
						다음
					</RoundButton>
				</ButtonBox>
			</FindIdViewContainer>
		</>
	);
}

const FindIdViewContainer = styled.div`
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
