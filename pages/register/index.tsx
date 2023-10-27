import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { ImageBox } from '../../styles/ts/components/box';

export default function register() {
	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const clickImgFile = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			const selectedFile = files[0];
			console.log(selectedFile);
		}
	};

	const clickCertifyBtn = () => {
		setCertifyNumVisible(true);
	};

	return (
		<>
			<RegisterViewContainer>
				<PageMainTitle>회원가입</PageMainTitle>

				<ImageSection onClick={clickImgFile}>
					<ImageBox width={'200px'} height={'200px'}>
						<img src='/images/add-image.png' alt='add-image' />
					</ImageBox>
					<input
						type='file'
						style={{ display: 'none' }}
						ref={fileInputRef}
						onChange={handleFileChange}
						accept={'image/*'}
					/>
				</ImageSection>

				<InputContainer>
					<InputBox>
						<label htmlFor='registerUserName'>이름</label>
						<input id='registerUserName' />
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerPhoneNum'>휴대폰 번호</label>
							<input id='registerPhoneNum' />
						</InputBox>
						<SquareButton height={'50px'} onClick={clickCertifyBtn}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>

					{certifyNumVisible && (
						<InputButtonBox>
							<InputBox certify='true'>
								<label htmlFor='registerCertifyNum'>인증 번호</label>
								<input id='registerCertifyNum' />
								<span className={'limit-time'}>00:00</span>
							</InputBox>
							<SquareButton height={'50px'}>확인</SquareButton>
						</InputButtonBox>
					)}

					<SelectBox>
						<InputBox>
							<label htmlFor='registerGender'>성별</label>
							<CustomSelect id='registerGender'></CustomSelect>
						</InputBox>
						<InputBox>
							<label htmlFor='registerAge'>연령대</label>
							<CustomSelect id='registerAge'></CustomSelect>
						</InputBox>
					</SelectBox>

					<InputBox>
						<label htmlFor='registerNTRP'>NTRP</label>
						<CustomSelect id='registerNTRP'></CustomSelect>
					</InputBox>

					<InputBox>
						<label htmlFor='registerEmail'>이메일</label>
						<input id='registerEmail' />
					</InputBox>

					<InputBox>
						<label htmlFor='registerPassword'>비밀번호</label>
						<input id='registerPassword' />
					</InputBox>

					<InputBox>
						<label htmlFor='registerRePwd'>비밀번호 확인</label>
						<input id='registerRePwd' />
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerNickNm'>닉네임</label>
							<input id='registerNickNm' />
						</InputBox>
						<SquareButton height={'50px'}>중복체크</SquareButton>
					</InputButtonBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerAddress'>주소</label>
							<input id='registerAddress' placeholder={'우편번호'} />
						</InputBox>
						<SquareButton height={'50px'}>주소 검색</SquareButton>
					</InputButtonBox>
					<InputBox>
						<input id='registerDetailAddress' placeholder={'상세주소'} />
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton colorstyle={'is-green'}>다음</RoundButton>
				</ButtonBox>
			</RegisterViewContainer>
		</>
	);
}

const RegisterViewContainer = styled.div`
	margin-top: 50px;
`;

const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	cursor: pointer;
`;

const InputContainer = styled.div`
	margin-top: 30px;
`;

const SelectBox = styled.div`
	display: flex;
	justify-content: space-between;

	div.input__InputBox-sc-w6l3ed-0 {
		flex-basis: 280px;

		&:first-child {
			margin-right: 20px;
		}
	}
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
