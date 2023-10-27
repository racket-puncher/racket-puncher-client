import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { FontSizeLg } from '../../styles/ts/common';

export default function FindId() {
	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const [certifyInputValue, setCertifyInputValue] = useState('');
	const [isClickCheckBtn, setIsClickCheckBtn] = useState(false);

	const [isClickNextBtn, setIsClickNextBtn] = useState(false);
	const [timer, setTimer] = useState(30);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	// 인증번호 전송
	// const sendCertifyNumBtn = () => {
	// 	setCertifyNumVisible(true);
	// };

	const handleCertifyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCertifyInputValue(event.target.value);
	};

	// 인증번호확인
	const checkCertifyNum = () => {
		setIsClickCheckBtn(true);
	};

	// 다음버튼 클릭
	const clickNextBtn = () => {
		setIsClickNextBtn(!isClickNextBtn);
		setCertifyNumVisible(false);
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
					setCertifyInputValue('');
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
	const getVerificatoin = () => {
		try {
			setCertifyNumVisible(true);
			setTimer(30);
			setCertifyInputValue('');
			setCertTimer();
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		setCertTimer();
		return () => {
			// 컴포넌트가 언마운트될 때 타이머 중지
			clearInterval(Number(intervalId));
		};
	}, []);

	return (
		<>
			<FindIdViewContainer>
				<PageMainTitle>아이디 찾기</PageMainTitle>
				{isClickNextBtn ? (
					<>
						<FoundIdContainer>가입 정보가 없습니다.</FoundIdContainer>
					</>
				) : (
					<>
						<InputContainer>
							<InputButtonBox>
								<InputBox>
									<label htmlFor='findIdPhoneNum'>휴대폰 번호</label>
									<input id='findIdPhoneNum' type={'number'} />
								</InputBox>
								<SquareButton height={'50px'} onClick={getVerificatoin}>
									인증번호 전송
								</SquareButton>
							</InputButtonBox>

							{certifyNumVisible && (
								<InputButtonBox>
									<InputBox certify='true'>
										<label htmlFor='findIdCertifyNum'>인증 번호</label>
										<input
											id='findIdCertifyNum'
											type={'number'}
											onChange={handleCertifyInputChange}
										/>
										<span className={'limit-time'}>
											{String(Math.floor(timer / 60)).padStart(2, '0')}:
											{String(timer % 60).padStart(2, '0')}
										</span>
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
					<RoundButton colorstyle={'is-green'} onClick={clickNextBtn} disabled={!isClickCheckBtn}>
						{isClickNextBtn ? '돌아가기' : '다음'}
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

const FoundIdContainer = styled.div`
	margin: ${rem('100px')} auto;
	text-align: center;
	font-size: ${FontSizeLg};
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
