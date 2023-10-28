import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { ImageBox } from '../../styles/ts/components/box';
import DrawerBox from '../../components/common/drawer';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { onlyNumber } from '../../utils/fomatter';
import { InputErrorText } from '../../styles/ts/components/text';

const schema = yup.object().shape({
	userName: yup.string().required('이름은 필수입니다.'),
	phoneNumber: yup.string().required('휴대폰 번호는 필수입니다.'),
	certifyNumber: yup.string().required('인증번호는 필수입니다.'),
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
		.required('비밀번호확인은 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
	nickName: yup.string().required('닉네임은 필수입니다.'),
	address: yup.string().required('우편번호는 필수입니다.'),
	detailAddress: yup.string().required('상세주소는 필수입니다.'),
});

export default function register() {
	const [certifyNumVisible, setCertifyNumVisible] = useState(false);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const [timer, setTimer] = useState(180);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	const [addressDrawer, setAddressDrawer] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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

	// 인증번호 타이머
	const setCertTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		const newIntervalId = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 1) {
					clearInterval(newIntervalId);
					// setCertifyInputValue('');
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
			setTimer(180);
			// setCertifyInputValue('');
			setCertTimer();
		} catch (e) {
			console.log(e);
		}
	};

	const handleAddressDrawer = () => {
		setAddressDrawer((prev) => !prev);
	};

	const checkValidatin = () => {
		if (
			!watch('userName') ||
			!watch('phoneNumber') ||
			!watch('certifyNumber') ||
			!watch('email') ||
			!watch('password') ||
			!watch('rePassword') ||
			!watch('nickName') ||
			!watch('address') ||
			!watch('detailAddress')
		) {
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		setCertTimer();
		return () => {
			clearInterval(Number(intervalId));
		};
	}, []);

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
						<input id='registerUserName' type={'text'} {...register('userName')} />
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerPhoneNum'>휴대폰 번호</label>
							<input
								id='registerPhoneNum'
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
							onClick={getVerificatoin}
							disabled={!watch('phoneNumber')}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>

					{certifyNumVisible && (
						<InputButtonBox>
							<InputBox certify='true'>
								<label htmlFor='registerCertifyNum'>인증 번호</label>
								<input
									id='registerCertifyNum'
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
							<SquareButton height={'50px'} disabled={!watch('certifyNumber')}>
								확인
							</SquareButton>
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
						<input id='registerEmail' {...register('email')} />
						{errors.email?.message && <InputErrorText>{errors.email.message}</InputErrorText>}
					</InputBox>

					<InputBox>
						<label htmlFor='registerPassword'>비밀번호</label>
						<input id='registerPassword' type={'password'} {...register('password')} />
						{errors.password?.message && <InputErrorText>{errors.password.message}</InputErrorText>}
					</InputBox>

					<InputBox>
						<label htmlFor='registerRePwd'>비밀번호 확인</label>
						<input id='registerRePwd' type={'password'} {...register('rePassword')} />
						{errors.rePassword?.message && (
							<InputErrorText>{errors.rePassword.message}</InputErrorText>
						)}
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerNickNm'>닉네임</label>
							<input id='registerNickNm' type={'text'} {...register('nickName')} />
						</InputBox>
						<SquareButton height={'50px'} disabled={!watch('nickName')}>
							중복체크
						</SquareButton>
					</InputButtonBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerAddress'>주소</label>
							<input
								id='registerAddress'
								placeholder={'우편번호'}
								{...register('address')}
								readOnly
							/>
						</InputBox>
						<SquareButton height={'50px'} onClick={handleAddressDrawer}>
							주소 검색
						</SquareButton>
					</InputButtonBox>
					<InputBox>
						<input
							id='registerDetailAddress'
							type={'text'}
							placeholder={'상세주소'}
							{...register('detailAddress')}
						/>
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton colorstyle={'is-green'} disabled={checkValidatin()}>
						다음
					</RoundButton>
				</ButtonBox>
			</RegisterViewContainer>

			<DrawerBox
				title={'주소 검색'}
				isOpen={addressDrawer}
				placement={'bottom'}
				height={'100%'}
				toggleDrawer={handleAddressDrawer}>
				sample
			</DrawerBox>
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
