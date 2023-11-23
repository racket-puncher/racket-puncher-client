import React, { ChangeEvent, useRef, useState } from 'react';
import MatchesService from 'service/matches/service';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontFamilyRegular, InputBorderColor, InputBoxColor, ReportColor } from 'styles/ts/common';
import { PageMainTitle } from 'styles/ts/components/titles';
import { InputBox } from 'styles/ts/components/input';
import { ImageBox } from 'styles/ts/components/box';
import { RoundButton } from 'styles/ts/components/buttons';
import { CustomSelect } from 'styles/ts/components/select';
import { prefix } from '../../constants/prefix';
import { TextArea } from 'styles/ts/components/textarea';
import { InputErrorText } from 'styles/ts/components/text';
import DPicker from 'components/contents/postMatching/datePicker/DPicker';
import TPicker from 'components/contents/postMatching/timePicker/TPicker';
import ButtonStyleRadio from 'components/common/buttonRadio';
import SearchCourtDrawer from 'components/contents/postMatching/searchCourtDrawer';
import useToast from 'utils/useToast';
import AuthService from 'service/auth/service';
import useRouterHook from 'utils/useRouterHook';
// import useCookies from 'utils/useCookies';
import { NTRPOptions, ageOptions, matchingTypesOptions } from 'constants/filterOption';

const schema = yup.object().shape({
	postTitle: yup.string().required('제목을 입력해주세요.'),
	matchType: yup.string().required('경기 유형을 선택해주세요.'),
	numOfRecruited: yup.number().required('모집 인원수를 선택해주세요.'),
	selectedAge: yup.string().required('모집 연령대를 선택해주세요.'),
	selectedNTRP: yup.string().required('모집할 NTRP를 선택해주세요.'),
	matchDate: yup.string().required('경기 날짜를 선택해주세요.'),
	matchStartTime: yup.string().required('경기 시작 시간을 선택해주세요.'),
	matchEndTime: yup.string().required('경기 종료 시간을 선택해주세요.'),
	deadlineDate: yup.string().required('모집 마감일을 선택해주세요.'),
	deadlineTime: yup.string().required('모집 마감 시간을 선택해주세요.'),
	courtAddress: yup.string().required('경기장 주소를 입력해주세요.'),
	isCourtBooked: yup.boolean().required('경기장 예약 여부를 선택해주세요.'),
	courtFee: yup
		.number()
		.required('경기장 대여료를 입력해주세요. (무료일 경우 0을 입력해주세요.)')
		.min(0),
	locationImg: yup.string(),
	mainText: yup.string().required('본문 내용을 입력해주세요.'),
});
export default function PostMatching() {
	// To-do
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정

	const {
		register: postMatchingResister,
		handleSubmit: postMatchingHandleSubmit,
		setValue: postMatchingSetValue,
		getValues: postMatchingGetValues,
		watch: postMatchingWatch,
		formState: { errors: postMatchingErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const { replace } = useRouterHook();
	const { setMessage } = useToast();
	// const { getCookie } = useCookies();
	const [matchDate, setMatchDate] = useState(null);
	const [matchStartTime, setMatchStartTime] = useState('');
	const [matchEndTime, setMatchEndTime] = useState('');
	const [deadlineDate, setDeadlineDate] = useState('');
	const [deadlineTime, setDeadlineTime] = useState('');
	const [courtInfos, setCourtInfos] = useState({ address: '', lat: '', lon: '' });
	const [numOfAllPlayers, setNumOfAllPlayers] = useState(0);
	const [optionsForNOR, setOptionsForNOR] = useState([
		{ value: null, label: '경기 유형을 먼저 선택해주세요.' },
	]);
	const selectHandler = (option: string) => {
		option === 'SINGLE'
			? setOptionsForNOR([{ value: 2, label: '2 명' }])
			: setOptionsForNOR([{ value: 4, label: '4 명' }]);
	};

	// 드로어
	const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
	const toggleSearchDrawer = () => setIsSearchDrawerOpen((prev: boolean) => !prev);

	// 이미지
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [fileData, setFileData] = useState(null);
	const [virtualImgData, setVirtualImgData] = useState(null);

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

	const courtImgStyle = {
		backgroundImage: `url(${virtualImgData})`,
		border: `1px solid ${InputBorderColor}`,
		borderRadius: '5px',
		height: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	const checkValidation = () => {
		if (
			!postMatchingWatch('postTitle') ||
			!postMatchingWatch('matchType') ||
			!postMatchingWatch('numOfRecruited') ||
			!postMatchingWatch('selectedAge') ||
			!postMatchingWatch('selectedNTRP') ||
			!postMatchingWatch('matchDate') ||
			!postMatchingWatch('matchStartTime') ||
			!postMatchingWatch('matchEndTime') ||
			!postMatchingWatch('deadlineDate') ||
			!postMatchingWatch('deadlineTime') ||
			!postMatchingWatch('courtAddress') ||
			!postMatchingWatch('courtFee') ||
			!postMatchingWatch('mainText')
		) {
			return true;
		} else {
			return false;
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!virtualImgData) {
			setMessage('error', '이미지를 추가해주세요.');
			return;
		}
		const posted = {
			title: postMatchingGetValues('postTitle'),
			ageGroup: postMatchingGetValues('selectedAge'),
			matchingType: postMatchingGetValues('matchType'),
			ntrp: postMatchingGetValues('selectedNTRP'),

			location: postMatchingGetValues('courtAddress'),
			lat: `${courtInfos.lat}`,
			lon: `${courtInfos.lon}`,

			date: postMatchingGetValues('matchDate'),
			startTime: postMatchingGetValues('matchStartTime'),
			endTime: postMatchingGetValues('matchEndTime'),
			recruitDueDate: postMatchingGetValues('deadlineDate'),
			recruitDueTime: postMatchingGetValues('deadlineTime'),
			recruitNum: postMatchingGetValues('numOfRecruited'),

			cost: postMatchingGetValues('courtFee'),
			isReserved: postMatchingGetValues('isCourtBooked'),

			content: postMatchingGetValues('mainText'),
		};
		console.log(posted);

		try {
			const formData = new FormData();
			formData.append('imageFile', fileData);
			const fileUrl = await AuthService.uploadImg(formData);
			const res = await MatchesService.regMatchingData({
				// params: { file: fileUrl },
				body: {
					...posted,
					locationImg: fileUrl.data.response,
				},
			});
			replace('/main');
			setMessage('success', '등록되었습니다!');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<SearchCourtDrawer
				isOpen={isSearchDrawerOpen}
				toggleDrawer={toggleSearchDrawer}
				setCourtInfos={setCourtInfos}
				setValue={postMatchingSetValue}
			/>
			<PageTitleArea>
				<PageMainTitle>매칭 글 등록</PageMainTitle>
			</PageTitleArea>
			<PostMatchingForm onSubmit={onSubmit}>
				<InputBox>
					<label htmlFor='postTitle'>제목</label>
					<input
						id='postTitle'
						type='text'
						{...postMatchingResister('postTitle')}
						onChange={(e) => postMatchingSetValue('postTitle', e.target.value)}
					/>
					{postMatchingErrors.postTitle?.message && (
						<InputErrorText>{postMatchingErrors.postTitle.message}</InputErrorText>
					)}
				</InputBox>
				<HalfContainer>
					<InputBox>
						<label htmlFor='matchType'>경기 유형</label>
						<CustomSelect
							id='matchType'
							options={matchingTypesOptions}
							{...postMatchingResister('matchType')}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const selected = e + '';
								postMatchingSetValue('matchType', selected);
								setNumOfAllPlayers(selected === 'SINGLE' ? 2 : 4);
								selectHandler(selected);
							}}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='numOfRecruited'>모집 인원</label>
						<CustomSelect
							id='numOfRecruited'
							options={optionsForNOR}
							{...postMatchingResister('numOfRecruited')}
							onChange={(e: number) => postMatchingSetValue('numOfRecruited', e)}
						/>
					</InputBox>
				</HalfContainer>
				<HalfContainer>
					<InputBox>
						<label htmlFor='selectedAge'>모집 연령대</label>
						<CustomSelect
							id='selectedAge'
							options={ageOptions}
							onChange={(e: string) => postMatchingSetValue('selectedAge', e)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='selectedNTRP'>모집 NTRP</label>
						<CustomSelect
							id='selectedNTRP'
							options={NTRPOptions}
							{...postMatchingResister('selectedNTRP')}
							onChange={(e: string) => {
								postMatchingSetValue('selectedNTRP', e);
							}}
						/>
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='matchDate'>경기일</label>
					<DPicker name='matchDate' setState={postMatchingSetValue} />
					<HiddenInput
						type='text'
						id='matchDate'
						value={`${matchDate}`}
						{...postMatchingResister('matchDate')}
						readOnly
					/>{' '}
					{postMatchingErrors.matchDate?.message && (
						<InputErrorText>{postMatchingErrors.matchDate.message}</InputErrorText>
					)}
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='matchStartTime'>시작 시간</label>
						<TPicker name='matchStartTime' setState={postMatchingSetValue} type={[true, true]} />
						<HiddenInput
							type='text'
							id='matchStartTime'
							value={`${matchStartTime}`}
							{...postMatchingResister('matchStartTime')}
							readOnly
						/>
						{postMatchingErrors.matchStartTime?.message && (
							<InputErrorText>{postMatchingErrors.matchStartTime.message}</InputErrorText>
						)}
					</InputBox>
					<InputBox>
						<label htmlFor='matchEndTime'>종료 시간</label>
						<TPicker name='matchEndTime' setState={postMatchingSetValue} type={[true, true]} />
						<HiddenInput
							type='text'
							id='matchEndTime'
							value={`${matchEndTime}`}
							{...postMatchingResister('matchEndTime')}
							readOnly
						/>
						{postMatchingErrors.matchEndTime?.message && (
							<InputErrorText>{postMatchingErrors.matchEndTime.message}</InputErrorText>
						)}
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='deadlineDnT'>모집 마감 기한</label>
					<HalfContainer>
						<DPicker
							name='deadlineDate'
							setState={postMatchingSetValue}
							matchDate={`${deadlineDate}`}
							type={[true, true, true]}
						/>
						<HiddenInput
							type='text'
							id='deadlineDate'
							value={`${deadlineDate}`}
							{...postMatchingResister('deadlineDate')}
							readOnly
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								postMatchingSetValue('deadlineDate', e.target.value);
								console.log(postMatchingGetValues('deadlineDate'));
							}}
						/>
						{postMatchingErrors.deadlineDate?.message && (
							<InputErrorText>{postMatchingErrors.deadlineDate.message}</InputErrorText>
						)}
						<TPicker name='deadlineTime' setState={postMatchingSetValue} type={[true, false]} />
						<HiddenInput
							type='text'
							id='deadlineTime'
							value={`${deadlineTime}`}
							{...postMatchingResister('deadlineTime')}
							readOnly
						/>
						{postMatchingErrors.deadlineTime?.message && (
							<InputErrorText>{postMatchingErrors.deadlineTime.message}</InputErrorText>
						)}
					</HalfContainer>
				</InputBox>

				<InputBox>
					<label htmlFor='courtAddress'>경기장 주소</label>
					<input
						type='text'
						id='courtAddress'
						defaultValue={''}
						value={`${courtInfos.address}`}
						{...postMatchingResister('courtAddress')}
						onClick={(e) => {
							e.preventDefault();
							setIsSearchDrawerOpen(true);
						}}
						readOnly
					/>
					{postMatchingErrors.courtAddress?.message && (
						<InputErrorText>{postMatchingErrors.courtAddress.message}</InputErrorText>
					)}
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='isCourtBooked'>경기장 예약 여부</label>
						<ButtonStyleRadio
							idString='isCourtBooked'
							setState={postMatchingSetValue}
							{...postMatchingResister('isCourtBooked')}
						/>
					</InputBox>
				</HalfContainer>
				<CourtFeeArea>
					<FeeForEachSpan>
						1인당{' '}
						{Number.isInteger(postMatchingGetValues('courtFee') / numOfAllPlayers)
							? `${postMatchingGetValues('courtFee') / numOfAllPlayers}`
							: '-'}{' '}
						원
					</FeeForEachSpan>
					<InputBox>
						<label htmlFor='courtFee'>구장 대여비</label>
						<input
							type='number'
							id='courtFee'
							className='text-align-right'
							pattern='^[0-9]+$'
							{...postMatchingResister('courtFee')}
							onChange={(e) => postMatchingSetValue('courtFee', Number(e.target.value))}
							onClick={() => {
								if (numOfAllPlayers === 0) setMessage('warning', '경기 유형을 먼저 선택해주세요!');
							}}
							// 포커스 옮기기
							// matchTypeREF.current.focus();
						/>
						{postMatchingErrors.courtFee?.message && (
							<InputErrorText>{postMatchingErrors.courtFee.message}</InputErrorText>
						)}
					</InputBox>
				</CourtFeeArea>

				<InputBox>
					<label htmlFor='courtPhoto'>경기장 이미지</label>
					<ImageSection onClick={clickImgFile}>
						<ImageContainer>
							<ImageBox width={'620px'} height={'400px'}>
								{virtualImgData ? (
									<div className='img-align-box' style={courtImgStyle} />
								) : (
									<>
										<img src={`${prefix}/images/add-image-rectangle-00.png`} alt='add-image' />
									</>
								)}
							</ImageBox>
						</ImageContainer>
						<input
							id='courtPhoto'
							type='file'
							style={{ display: 'none' }}
							ref={fileInputRef}
							onChange={handleFileChange}
							accept={'image/*'}
							multiple
						/>
					</ImageSection>
				</InputBox>

				<InputBox>
					<label htmlFor='mainText'>본문 내용</label>
					<MainTextArea
						id={'mainText'}
						onChange={(e) => postMatchingSetValue('mainText', e.target.value)}
						placeholder='내용을 입력하세요.'
						{...postMatchingResister('mainText')}
					/>
					{postMatchingErrors.mainText?.message && (
						<InputErrorText>{postMatchingErrors.mainText.message}</InputErrorText>
					)}
				</InputBox>

				<SubmitBtn colorstyle={'is-black'} type='submit' disabled={checkValidation()}>
					등록하기
				</SubmitBtn>
			</PostMatchingForm>
		</>
	);
}

const PageTitleArea = styled.div`
	margin: ${rem('50px')} auto;
`;

const PostMatchingForm = styled.form`
	display: flex;
	flex-direction: column;

	.input__InputBox-sc-w6l3ed-0 {
		.text-align-right {
			text-align: right;
		}

		.select__CustomSelect-sc-10zdv74-0 {
			margin-bottom: 0px;
		}
	}
`;
const HalfContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${rem('20px')};

	.input__InputBox-sc-w6l3ed-0 {
		width: 100%;

		.text-align-right {
			text-align: right;
		}
	}

	* .buttonRadio__RadioButton-sc-b6o1nr-1,
	* .select__CustomSelect-sc-10zdv74-0 {
		margin-bottom: 0px;
	}
`;

const CourtFeeArea = styled.div`
	position: relative;
	width: 100%;
`;

const FeeForEachSpan = styled.span`
	position: absolute;
	top: ${rem('3px')};
	right: ${rem('5px')};
	max-width: ${rem('150px')};
	white-space: nowrap;
	overflow: hidden;

	font-family: ${FontFamilyRegular};
	color: ${ReportColor};
`;

const SubmitBtn = styled(RoundButton)`
	margin: ${rem('30px')} 0px;
`;

const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	min-width: 100%;
	max-width: ${rem('620px')};
	// min-height: fit-content;
	border: none;
	margin-bottom: ${rem('30px')};
	background-color: ${InputBoxColor};
	img {
		max-width: 100%;
		border-radius: 5px;
		border: 1px solid ${InputBorderColor};
		overflow: hidden;
	}
	input {
		height: 0px; !important;
		padding: 0px; !important;
	}	
`;

const ImageContainer = styled.div`
	width: 100%;
`;

const MainTextArea = styled(TextArea)`
	max-width: ${rem('620px')};
	height: ${rem('400px')};
`;

const HiddenInput = styled.input`
	position: absolute;
	width: 0px;
	height: 0px;
	max-width: 0px;
	max-height: 0px;
	background-color: transparent;
	padding: 0px;
	border: 1px solid transparent;
	border-radius: 0px;
	box-shadow: none;
	visibility: hidden;
`;
