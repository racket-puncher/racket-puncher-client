import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { rem } from 'polished';

import { InputBorderColor } from 'styles/ts/common';
import { InputBox } from 'styles/ts/components/input';
import { RoundButton, SquareButton } from 'styles/ts/components/buttons';
import { PageMainTitle } from 'styles/ts/components/titles';
import { ImageBox } from 'styles/ts/components/box';
import { InputErrorText } from 'styles/ts/components/text';
import { prefix } from 'constants/prefix';
import useToast from 'utils/useToast';
import useCookies from 'utils/useCookies';
import useRouterHook from 'utils/useRouterHook';
import usersService from 'service/users/service';
import AuthService from 'service/auth/service';

import { NTRPOptions, ageOptions } from 'constants/filterOption';
import Selector from 'components/contents/postMatching/selector';
import SearchCourtDrawer from 'components/contents/postMatching/searchCourtDrawer';

// const userInfoALT = {
// 	userNickname: '왕자',
// 	ageGroup: '30대',
// 	gender: '남',
// 	zipCode: '07546',
// 	userAddress: '서울시 성동구 천호대로5길 51-4 405호',
// 	ntrp: 'Pro (6.0 ~ 7.0)',
// 	// winningRate: [1, 3],
// 	mannerPoint: 85,
// 	userName: '김개발',
// 	// phoneNumber: '01011112222',
// 	userEmail: 'princeofracket@gmail.com',
// 	imageURL: '',
// };

// nickname: string; // 닉네임
// 	password: string; // 비밀번호
// 	email: string; // 이메일
// 	phoneNumber: string; // 전화번호
// 	address: string; // 주소
// 	zipCode: string; // 우편번호
// 	ntrp: string; // NTRP
// 	gender: string; // 성별
// 	ageGroup: string; // 연령대

const schema = yup.object().shape({
	// phoneNumber: yup.string().required('휴대폰 번호는 필수입니다.'),
	// certifyNumber: yup.string().required('인증번호는 필수입니다.'),
	selectedAge: yup.string(),
	ntrp: yup.string(),
	email: yup
		.string()
		// .required('이메일은 필수입니다.')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'이메일 형식이 올바르지 않습니다.'
		),
	// password: yup
	// 	.string()
	// 	.required('비밀번호는 필수입니다.')
	// 	.matches(
	// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
	// 		'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
	// 	),
	// rePwd: yup
	// 	.string()
	// 	.required('비밀번호확인은 필수입니다.')
	// 	.matches(
	// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
	// 		'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
	// 	),
	nickname: yup.string(),
	zipCode: yup.string(),
	address: yup.string(),
	imageURL: yup.string(),
});

export default function EditMyInfo() {
	const { getMyProfileInfo, postProfileImg, patchMyProfileInfo } = usersService;

	const { checkLogin, getCookie, setCookie } = useCookies();
	const { setMessage } = useToast();
	const { replace, movePage, reload } = useRouterHook();
	const [userId, setUserId] = useState('');
	const [userInfo, setUserInfo] = useState({
		id: '', // 회원 고유 id
		siteusername: '', // 이름
		nickname: '', // 닉네임
		email: '', // 이메일
		phoneNumber: '', // 전화번호
		mannerScore: 0, // 매너점수
		penaltyScore: 0, // 패널티 점수
		gender: '', // 성별
		ntrp: '', // NTRP
		address: '', // 주소
		zipCode: '', //				우편번호
		ageGroup: '', // 연령대
		profileImg: '', // 이미지 파일 url
	});

	useEffect(() => {
		const getNSsetData = async (id: string) => {
			try {
				// const res = await getMyProfileInfo(getCookie('id'));
				const res = await getMyProfileInfo(id);
				const data = res.data.response;
				console.log(data);
				setUserInfo({
					...userInfo,
					siteusername: data.siteusername,
					ageGroup: ageOptions.filter((ele) => ele.value === data.ageGroup)[0].label,
					gender: data.gender === 'MALE' ? '남' : '여',
					nickname: data.nickname,
					ntrp: NTRPOptions.filter((ele) => ele.value === data.ntrp)[0].label,
					zipCode: data.zipCode,
					address: data.address,
					email: data.email,

					profileImg: data.profileImg,
				});

				// editMyInfoSetValue('nickname', data.nickname);
				// editMyInfoSetValue('ntrp', NTRPOptions.filter((ele) => ele.value === data.ntrp)[0].label);
				// editMyInfoSetValue('zipCode', data.zipCode);
				// editMyInfoSetValue('address', data.address);
				editMyInfoSetValue('email', data.email);
				// editMyInfoSetValue('imageURL', data.profileImg);
				// // editMyInfoSetValue('phoneNumber', data.phoneNumber);
			} catch (err) {
				console.log(err);
			}
		};
		if (!checkLogin()) {
			setMessage('error', '로그인이 필요한 서비스입니다.');
			replace('/login');
		} else {
			getCookie('id') && getNSsetData(getCookie('id'));
		}
	}, []);

	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [fileData, setFileData] = useState(null);
	const [virtualImgData, setVirtualImgData] = useState(null);

	const {
		register: editMyInfoRegister,
		handleSubmit: editMyInfoHandleSubmit,
		getValues: editMyInfoGetValues,
		setValue: editMyInfoSetValue,
		watch: editMyInfoWatch,
		formState: { errors: editMyInfoErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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
	const profileImgStyle = {
		backgroundImage: `url(${virtualImgData})`,
		border: `1px solid ${InputBorderColor}`,
		borderRadius: '50%',
		height: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};
	// 닉네임 중복 체크 ---------------------------------------------------------------
	const checkNickname = async () => {
		const params = {
			nickname: editMyInfoGetValues('nickname'),
		};
		try {
			const res = await AuthService.checkNickname(params);
			setMessage('success', res.data.response);
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	const checkValidation = () => {
		if (
			// !editMyInfoWatch('phoneNumber') ||
			// !editMyInfoWatch('certifyNumber') ||
			!editMyInfoWatch('email') ||
			// !editMyInfoWatch('password') ||
			// !editMyInfoWatch('rePwd') ||
			!editMyInfoWatch('nickname') ||
			!editMyInfoWatch('zipCode') ||
			!editMyInfoWatch('address')
		) {
			return true;
		} else {
			return false;
		}
	};

	// const uploadPhoto = async () => {
	// 	const params = {
	// 		...userInfo,
	// 		email: editMyInfoGetValues('email'),
	// 		nickname: editMyInfoGetValues('nickname'),
	// 		address: editMyInfoGetValues('address'),
	// 		zipCode: editMyInfoGetValues('zipCode'),
	// 		ntrp: editMyInfoGetValues('ntrp'),
	// 	};
	// 	try {
	// 		const formData = new FormData();
	// 		formData.append('imageFile', fileData);
	// 		const fileUrl = await usersService.postProfileImg(userId, formData);
	// 		await usersService.patchMyProfileInfo(userId, {
	// 			...params,
	// 			profileImg: fileUrl.data.response,
	// 		});
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// const getNSetToken = async () => {
	// 	try {
	// 		const newTo = await AuthService.getNewToken(
	// 			getCookie('accessToken'),
	// 			getCookie('refreshToken')
	// 		);
	// 		console.log(getCookie('accessToken'));
	// 		setCookie('accessToken', newTo.data.accessToken);
	// 		console.log(newTo.data.accessToken);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };
	const onSubmitHandler = async () => {
		// e.preventDefault();

		const params = {
			...userInfo,
			email: editMyInfoGetValues('email'),
			nickname: editMyInfoGetValues('nickname'),
			address: editMyInfoGetValues('address'),
			zipCode: editMyInfoGetValues('zipCode'),
			ntrp: editMyInfoGetValues('ntrp'),
		};
		try {
			// const formData = new FormData();
			// formData.append('imageFile', fileData);
			// const fileUrl = await usersService.postProfileImg(userId, formData);
			// await usersService.patchMyProfileInfo(userId, {
			// 	...params,
			// 	profileImg: fileUrl.data.response,
			// });
			setMessage('success', '수정되었습니다.');
			await replace('/my');
			// movePage('/my');
		} catch (e) {
			console.log(e);
		}
	};

	// 주소 검색 모달
	const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
	const toggleSearchDrawer = () => setIsSearchDrawerOpen((prev: boolean) => !prev);

	return (
		<>
			<SearchCourtDrawer
				isOpen={isSearchDrawerOpen}
				toggleDrawer={toggleSearchDrawer}
				setValue={editMyInfoSetValue}
			/>
			<EditMyInfoForm onSubmit={editMyInfoHandleSubmit(onSubmitHandler)}>
				<PageMainTitle>내 정보 수정</PageMainTitle>
				<ImageSection onClick={clickImgFile}>
					<ImageBox
						width={'200px'}
						height={'200px'}
						style={{ borderRadius: '50%', overflow: 'hidden' }}>
						{!virtualImgData && <img src={`${userInfo.profileImg}`} alt='프로필 사진' />}
						{virtualImgData ? (
							<div className='img-align-box' style={profileImgStyle} />
						) : (
							<img src={`${prefix}/images/add-image.png`} alt='add-image' />
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
						<label htmlFor='editUserName'>이름</label>
						<input id='editUserName' type={'text'} value={userInfo.siteusername} disabled />
					</InputBox>
					<SelectBox>
						<InputBox>
							<label htmlFor='editGender'>성별</label>
							<Selector idString='editGender' value={userInfo.gender} disabled />
						</InputBox>
						<InputBox>
							<label htmlFor='selectedAge'>연령대</label>
							<Selector idString='selectedAge' value={userInfo.ageGroup} disabled />
						</InputBox>
					</SelectBox>
					<InputBox>
						<label htmlFor='editNTRP'>NTRP</label>
						<Selector
							idString='editNTRP'
							options={NTRPOptions}
							defaultValue={userInfo.ntrp}
							onChangeHandler={(e: string) => editMyInfoSetValue('ntrp', e)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='email'>이메일</label>
						<input
							id='email'
							defaultValue={userInfo.email}
							{...editMyInfoRegister('email')}
							// defaultValue={editMyInfoGetValues('email')}
						/>
						{editMyInfoErrors.email?.message && (
							<InputErrorText>{editMyInfoErrors.email.message}</InputErrorText>
						)}
					</InputBox>
					{/* <InputBox>
						<label htmlFor='password'>비밀번호</label>
						<input id='password' type={'password'} {...editMyInfoRegister('password')} />
						{editMyInfoErrors.password?.message && (
							<InputErrorText>{editMyInfoErrors.password.message}</InputErrorText>
						)}
					</InputBox>
					<InputBox>
						<label htmlFor='rePwd'>비밀번호 확인</label>
						<input id='rePwd' type={'password'} {...editMyInfoRegister('rePwd')} />
						{editMyInfoErrors.rePwd?.message && (
							<InputErrorText>{editMyInfoErrors.rePwd.message}</InputErrorText>
						)}
					</InputBox> */}
					<InputButtonBox>
						<InputBox>
							<label htmlFor='nickname'>닉네임</label>
							<input
								id='nickname'
								type={'text'}
								{...editMyInfoRegister('nickname')}
								defaultValue={userInfo.nickname}
							/>
						</InputBox>
						<SquareButton
							height={'50px'}
							disabled={!editMyInfoWatch('nickname')}
							onClick={checkNickname}
							type='button'>
							중복체크
						</SquareButton>
					</InputButtonBox>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='zipCode'>주소</label>
							<input
								id='zipCode'
								defaultValue={userInfo.zipCode}
								{...editMyInfoRegister('zipCode')}
								// defaultValue={editMyInfoGetValues('zipCode')}
								readOnly
							/>
						</InputBox>
						<SquareButton height={'50px'} onClick={toggleSearchDrawer} type='button'>
							주소 검색
						</SquareButton>
					</InputButtonBox>
					<InputBox>
						<input
							id='address'
							type={'text'}
							defaultValue={userInfo.address}
							// defaultValue={editMyInfoGetValues('address')}
							{...editMyInfoRegister('address')}
						/>
					</InputBox>
				</InputContainer>
				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						// disabled={checkValidation()}
						type='submit'>
						수정하기
					</RoundButton>
				</ButtonBox>
			</EditMyInfoForm>
		</>
	);
}

const EditMyInfoForm = styled.form`
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

	* .select__CustomSelect-sc-10zdv74-0 {
		margin-bottom: 0px;
	}
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
	align-items: flex-end;

	.input__InputBox-sc-w6l3ed-0 {
		flex-basis: 380px;
	}

	.buttons__SquareButton-sc-xhpq7c-1 {
		flex-basis: 180px;
		margin-bottom: 20px;
		margin-left: ${rem('20px')};
	}
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
