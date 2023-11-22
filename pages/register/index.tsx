import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';

import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { GrayLine, ImageBox } from '../../styles/ts/components/box';
import DrawerBox from '../../components/common/drawer';
import { onlyNumber } from '../../utils/formatter';
import { InputErrorText } from '../../styles/ts/components/text';
import {
	BlackColor,
	FontSizeMd,
	FontSizeMdLg,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	LightBlackColor,
	PrimaryColor,
} from '../../styles/ts/common';
import { CustomBadge } from '../../styles/ts/components/badge';
import { prefix } from '../../constants/prefix';
import MatchesService from '../../service/matches/service';
import AuthService from '../../service/auth/service';
import { ageOptions, genderOptions, NTRPOptions } from '../../constants/filterOption';
import useRouterHook from '../../utils/useRouterHook';
import useToast from '../../utils/useToast';

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
	gender: yup.string().required('성별을 선택해주세요.'),
	age: yup.string().required('연령대를 선택해주세요.'),
	NTRP: yup.string().required('NTRP를 선택해주세요.'),
});

export default function register() {
	const { movePage } = useRouterHook();
	const { setMessage } = useToast();

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);

	// file
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [fileData, setFileData] = useState(null);
	const [virtualImgData, setVirtualImgData] = useState(null);

	// timer
	const [timer, setTimer] = useState(180);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	// address
	const [addressDrawer, setAddressDrawer] = useState(false);
	const [addressList, setAddressList] = useState(null);

	const profileImgStyle = {
		backgroundImage: `url(${virtualImgData})`,
		border: `1px solid ${InputBorderColor}`,
		borderRadius: '50%',
		height: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	const {
		control: signupControl,
		register: signUpRegister,
		handleSubmit: signupHandleSubmit,
		getValues: signupGetValue,
		setValue: signupSetValue,
		watch: signupWatch,
		formState: { errors: signErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const {
		register: addressRegister,
		handleSubmit: addressHandleSubmit,
		setValue: addressSetValue,
		watch: addressWatch,
		formState: { errors: addressErrors },
	} = useForm();

	const clickImgFile = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = (event) => {
			setVirtualImgData(event.target.result);
		};
		setFileData(files);
		fileReader.readAsDataURL(files);
	};

	const clickCertifyBtn = () => {
		setCertifyNumVisible(true);
	};

	// 닉네임 중복 체크 ---------------------------------------------------------------
	const checkNickname = async () => {
		const params = {
			nickname: signupGetValue('nickName'),
		};
		try {
			const res = await AuthService.checkNickname(params);
			setMessage('success', res.data.response);
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	// 인증번호 ---------------------------------------------------------------
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

	// 주소 검색 모달 ---------------------------------------------------------------
	const handleAddressDrawer = () => {
		setAddressDrawer((prev) => !prev);
	};

	// 주소 검색
	const onClickSearchAddress = async (data: any) => {
		const payload = {
			keyword: data.address,
		};
		try {
			const res = await MatchesService.searchAddress(payload);
			setAddressList(res.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	// 주소 아이템 클릭시
	const onClickAddressItem = (item: any) => {
		handleAddressDrawer();
		signupSetValue('address', item.zipNo);
	};

	// 회원가입 ------------------------------------------------------------------
	const signUpComplete = async () => {
		if (!virtualImgData) {
			setMessage('error', '이미지를 추가해주세요.');
			return;
		}

		const params = {
			email: signupGetValue('userName'),
			password: signupGetValue('password'),
			nickname: signupGetValue('nickName'),
			roles: ['ROLE_USER'],
			ageGroup: signupGetValue('age'),
			gender: signupGetValue('gender'),
			address: signupGetValue('detailAddress'),
			zipCode: signupGetValue('address'),
			ntrp: signupGetValue('NTRP'),
			phoneNumber: signupGetValue('phoneNumber'),
			profileImg: '',
		};
		try {
			const formData = new FormData();
			formData.append('imageFile', fileData);
			const fileUrl = await AuthService.uploadImgSignup(formData);
			const res = await AuthService.signup({ ...params, profileImg: fileUrl.data.response });
			movePage('/login');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<RegisterViewContainer>
				<PageMainTitle>회원가입</PageMainTitle>

				<ImageSection onClick={clickImgFile}>
					<ImageBox width={'200px'} height={'200px'}>
						{virtualImgData ? (
							<div className='img-align-box' style={profileImgStyle} />
						) : (
							<>
								<img src={`${prefix}/images/add-image.png`} alt='add-image' />
							</>
						)}
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
						<input id='registerUserName' type={'text'} {...signUpRegister('userName')} />
					</InputBox>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerPhoneNum'>휴대폰 번호</label>
							<input
								id='registerPhoneNum'
								type={'text'}
								maxLength={11}
								{...signUpRegister('phoneNumber')}
								onChange={(e) => {
									signupSetValue('phoneNumber', onlyNumber(e.target.value));
								}}
							/>
							{signErrors.phoneNumber?.message && (
								<InputErrorText>{signErrors.phoneNumber.message}</InputErrorText>
							)}
						</InputBox>
						<SquareButton
							height={'50px'}
							onClick={getVerification}
							disabled={!signupWatch('phoneNumber')}>
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
									{...signUpRegister('certifyNumber')}
									onChange={(e) => {
										signupSetValue('certifyNumber', onlyNumber(e.target.value));
									}}
								/>
								<span className={'limit-time'}>
									{String(Math.floor(timer / 60)).padStart(2, '0')}:
									{String(timer % 60).padStart(2, '0')}
								</span>
								{signErrors.certifyNumber?.message && (
									<InputErrorText>{signErrors.certifyNumber.message}</InputErrorText>
								)}
							</InputBox>
							<SquareButton height={'50px'} disabled={!signupWatch('certifyNumber')}>
								확인
							</SquareButton>
						</InputButtonBox>
					)}
					<SelectBox>
						<InputBox>
							<label htmlFor='registerGender'>성별</label>
							<Controller
								name='gender'
								control={signupControl}
								render={({ field }) => <CustomSelect {...field} options={genderOptions} />}
							/>
						</InputBox>
						<InputBox>
							<label htmlFor='registerAge'>연령대</label>
							<Controller
								name='age'
								control={signupControl}
								render={({ field }) => <CustomSelect {...field} options={ageOptions} />}
							/>
						</InputBox>
					</SelectBox>
					<InputBox>
						<label htmlFor='registerNTRP'>NTRP</label>
						<Controller
							name='NTRP'
							control={signupControl}
							render={({ field }) => <CustomSelect {...field} options={NTRPOptions} />}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='registerEmail'>이메일</label>
						<input id='registerEmail' {...signUpRegister('email')} />
						{signErrors.email?.message && (
							<InputErrorText>{signErrors.email.message}</InputErrorText>
						)}
					</InputBox>
					<InputBox>
						<label htmlFor='registerPassword'>비밀번호</label>
						<input id='registerPassword' type={'password'} {...signUpRegister('password')} />
						{signErrors.password?.message && (
							<InputErrorText>{signErrors.password.message}</InputErrorText>
						)}
					</InputBox>
					<InputBox>
						<label htmlFor='registerRePwd'>비밀번호 확인</label>
						<input id='registerRePwd' type={'password'} {...signUpRegister('rePassword')} />
						{signErrors.rePassword?.message && (
							<InputErrorText>{signErrors.rePassword.message}</InputErrorText>
						)}
					</InputBox>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerNickNm'>닉네임</label>
							<input id='registerNickNm' type={'text'} {...signUpRegister('nickName')} />
						</InputBox>
						<SquareButton
							height={'50px'}
							disabled={!signupWatch('nickName')}
							onClick={checkNickname}>
							중복체크
						</SquareButton>
					</InputButtonBox>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerAddress'>주소</label>
							<input
								id='registerAddress'
								placeholder={'우편번호'}
								{...signUpRegister('address')}
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
							{...signUpRegister('detailAddress')}
						/>
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton colorstyle={'is-green'} onClick={signupHandleSubmit(signUpComplete)}>
						회원가입
					</RoundButton>
				</ButtonBox>
			</RegisterViewContainer>

			{/* 주소검색 모달 */}
			<DrawerBox
				title={'주소 검색'}
				isOpen={addressDrawer}
				placement={'bottom'}
				height={'100%'}
				toggleDrawer={handleAddressDrawer}>
				<>
					<InputNoTitleButtonBox>
						<InputBox>
							<input
								id='registerAddress'
								placeholder={'우편번호'}
								{...addressRegister('address')}
							/>
						</InputBox>
						<SquareButton height={'50px'} onClick={addressHandleSubmit(onClickSearchAddress)}>
							주소 검색
						</SquareButton>
					</InputNoTitleButtonBox>

					<DescTextBox>
						<p>
							찾으시려는 도로명주소, 동(읍/면/리) 또는 건물명을 입력해주세요.
							<br />
							(예 : 판교동, 판교원로 68, 판교실리콘파크)
						</p>
					</DescTextBox>

					<GrayLine />

					<AddressContainer>
						{addressList?.map((item) => {
							return (
								<AddressBoxWrap
									key={uuidv4()}
									onClick={() => {
										onClickAddressItem(item);
									}}>
									<AddLeftWrap>
										<AddressBox>
											<CustomBadge color={PrimaryColor}>도로명</CustomBadge>
											<p>{item.roadAddr}</p>
										</AddressBox>
										<AddressBox>
											<CustomBadge>지번</CustomBadge>
											<p>{item.jibunAddr}</p>
										</AddressBox>
									</AddLeftWrap>
									<AddRightWrap>{item.zipNo}</AddRightWrap>
								</AddressBoxWrap>
							);
						})}
					</AddressContainer>
				</>
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
			margin-right: ${rem('20px')};
		}
	}
`;

const InputButtonBox = styled.div`
	display: flex;
	justify-content: space-between;

	.input__InputBox-sc-w6l3ed-0 {
		flex-basis: 380px;
	}

	.buttons__SquareButton-sc-xhpq7c-1 {
		flex-basis: 180px;
		margin-top: 24px;
		margin-bottom: 20px;
		margin-left: ${rem('20px')};
	}
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;

const DescTextBox = styled.div`
	margin-bottom: 20px;

	p {
		font-size: ${rem(FontSizeSpSm)};
		color: ${LightBlackColor};
		font-family: Pretendard-Regular;
		line-height: ${rem(FontSizeMdLg)};
	}
`;

const AddressContainer = styled.div`
	margin-top: 20px;
`;

const AddressBoxWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${InputBoxColor};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	padding: ${rem('15px')};
	margin-bottom: 10px;
`;

const AddLeftWrap = styled.div`
	margin-right: ${rem('20px')};
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;

	&:first-child {
		margin-bottom: 10px;
	}

	p {
		margin-left: ${rem('10px')};
		font-size: ${rem(FontSizeSpSm)};
		font-family: Pretendard-Regular;
		line-height: ${rem(FontSizeMd)};
	}
`;

const AddRightWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${rem(FontSizeMd)};
	font-family: Pretendard-Regular;
	color: ${BlackColor};
`;

const InputNoTitleButtonBox = styled.div`
	display: flex;
	justify-content: space-between;

	.input__InputBox-sc-w6l3ed-0 {
		flex-basis: 380px;
	}

	.buttons__SquareButton-sc-xhpq7c-1 {
		flex-basis: 180px;
		margin-bottom: 20px;
		margin-left: ${rem('20px')};
	}
`;
