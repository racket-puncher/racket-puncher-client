import { PageMainTitle } from '../../styles/ts/components/titles';
import React, { useState } from 'react';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontSizeLg } from '../../styles/ts/common';

export default function FindId() {
	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const [certifyInputValue, setCertifyInputValue] = useState('');
	const [isClickCheckBtn, setIsClickCheckBtn] = useState(false);

	const [isClickNextBtn, setIsClickNextBtn] = useState(false);

	const sendCertifyNumBtn = () => {
		setCertifyNumVisible(true);
	};

	const handleCertifyInputChange = (event) => {
		setCertifyInputValue(event.target.value);
	};

	const checkCertifyNum = () => {
		setIsClickCheckBtn(true);
	};

	const clickNextBtn = () => {
		setIsClickNextBtn(!isClickNextBtn);
	};

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
									<label htmlFor='registerPhoneNum'>휴대폰 번호</label>
									<input id='registerPhoneNum' type={'number'} />
								</InputBox>
								<SquareButton height={'50px'} onClick={sendCertifyNumBtn}>
									인증번호 전송
								</SquareButton>
							</InputButtonBox>

							{certifyNumVisible && (
								<InputButtonBox>
									<InputBox certify>
										<label htmlFor='registerCertifyNum'>인증 번호</label>
										<input
											id='registerCertifyNum'
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
