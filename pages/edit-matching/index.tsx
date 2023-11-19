import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import MatchesService from 'service/matches/service';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontFamilyRegular, InputBorderColor, InputBoxColor, ReportColor } from 'styles/ts/common';
import { PageMainTitle } from 'styles/ts/components/titles';
import { InputBox } from 'styles/ts/components/input';
import { RoundButton } from 'styles/ts/components/buttons';
import { ImageBox } from 'styles/ts/components/box';
import { TextArea } from 'styles/ts/components/textarea';
import DPicker from 'components/contents/postMatching/datePicker/DPicker';
import TPicker from 'components/contents/postMatching/timePicker/TPicker';
import ButtonStyleRadio from 'components/common/buttonRadio';
import Selector from 'components/contents/postMatching/selector';
import SearchCourtDrawer from 'components/contents/postMatching/searchCourtDrawer';
import useRouterHook from 'utils/useRouterHook';
import axios from 'axios';
import useToast from 'utils/useToast';

interface IEdtMatchingProps {
	matching_id: string;
}

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

export default function EditMatching(props: IEdtMatchingProps) {
	// To-do
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정
	// 이미지 api 붙이기

	const {
		register: editMatchingResister,
		// handleSubmit: editMatchingHandleSubmit,
		setValue: editMatchingSetValue,
		getValues: editMatchingGetValues,
		watch: editMatchingWatch,
		formState: { errors: editMatchingErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { setMessage } = useToast();
	const { moveToBack } = useRouterHook();

	const [postData, setPostData] = useState(null);
	const [courtInfos, setCourtInfos] = useState({ address: '', lat: '', lon: '' });
	const [numOfAllPlayers, setNumOfAllPlayers] = useState(1);
	const [selectedImage, setSelectedImage] = useState(null);
	const [optionsForNOR, setOptionsForNOR] = useState([
		{
			value: editMatchingGetValues('numOfRecruited'),
			label: '-' || `${editMatchingGetValues('numOfRecruited')}` + '명',
		},
	]);

	useEffect(() => {
		// MatchesService.getDetailMatchingList(
		// 	{ matchingId: 1, matching_id: '1' }
		// )
		const getNSsetData = async () => {
			try {
				// const res = await axios.get('http://3.38.50.101:8080/api/matches/' + `${props.postId}`)
				const res = await axios.get('http://3.38.50.101:8080/api/matches/1');
				const db = res.data.response;
				setPostData(db);
				editMatchingSetValue('postTitle', db.title);
				editMatchingSetValue('matchType', db.matchingType);
				editMatchingSetValue('numOfRecruited', db.recruitNum);
				editMatchingSetValue('selectedAge', db.ageGroup);
				editMatchingSetValue('selectedNTRP', db.ntrp);
				editMatchingSetValue('matchDate', db.date);
				editMatchingSetValue('matchStartTime', db.startTime);
				editMatchingSetValue('matchEndTime', db.endTime);
				editMatchingSetValue('deadlineDate', db.recruitDueDate);
				editMatchingSetValue('deadlineTime', db.recruitDueTime);
				editMatchingSetValue('courtAddress', db.location);
				editMatchingSetValue('isCourtBooked', db.isReserved);
				editMatchingSetValue('courtFee', db.cost);
				editMatchingSetValue('locationImg', db.locationImg);
				editMatchingSetValue('mainText', db.content);
				console.log(db);
				setCourtInfos({ ...courtInfos, lat: db.lat, lon: db.lon });
				setNumOfAllPlayers(db.matchingType.includes('SINGLE') ? 2 : 4);
			} catch (err) {
				console.log(err);
			}
		};
		getNSsetData();
		console.log(postData);
	}, []);

	const selectHandler = (option: string) => {
		option.includes('SINGLE')
			? setOptionsForNOR([{ value: 1, label: '1 명' }])
			: setOptionsForNOR([
					{ value: 1, label: '1 명' },
					{ value: 2, label: '2 명' },
					{ value: 3, label: '3 명' },
			  ]);
	};

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

			const fileReader = new FileReader();
			fileReader.readAsDataURL(selectedFile);
			fileReader.onloadend = () => {
				setSelectedImage(fileReader.result);
			};
			console.log(fileReader);
			editMatchingSetValue('locationImg', `${fileReader.result}`);
		}
	};

	const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
	const toggleSearchDrawer = () => setIsSearchDrawerOpen((prev: boolean) => !prev);

	const checkValidation = () => {
		if (
			!editMatchingWatch('postTitle') ||
			!editMatchingWatch('matchType') ||
			!editMatchingWatch('numOfRecruited') ||
			!editMatchingWatch('selectedAge') ||
			!editMatchingWatch('selectedNTRP') ||
			!editMatchingWatch('matchDate') ||
			!editMatchingWatch('matchStartTime') ||
			!editMatchingWatch('matchEndTime') ||
			!editMatchingWatch('deadlineDate') ||
			!editMatchingWatch('deadlineTime') ||
			!editMatchingWatch('courtAddress') ||
			!editMatchingWatch('isCourtBooked') ||
			!editMatchingWatch('courtFee') ||
			// !editMatchingWatch('courtPhoto') ||
			!editMatchingWatch('mainText')
		) {
			return true;
		} else {
			return false;
		}
	};

	const onSubmit = (e: any) => {
		e.preventDefault();
		const editedData = {
			...postData,
			title: editMatchingGetValues('postTitle'),
			matchingType: editMatchingGetValues('matchType'),
			recruitNum: editMatchingGetValues('numOfRecruited'),
			ageGroup: editMatchingGetValues('selectedAge'),
			ntrp: editMatchingGetValues('selectedNTRP'),
			matchingDate: editMatchingGetValues('matchDate'),
			matchingStartTime: editMatchingGetValues('matchStartTime'),
			matchingEndTime: editMatchingGetValues('matchEndTime'),
			recruitDueDate: editMatchingGetValues('deadlineDate'),
			recruitDueTime: editMatchingGetValues('deadlineTime'),
			location: editMatchingGetValues('courtAddress'),
			lat: `${courtInfos.lat}`,
			lon: `${courtInfos.lon}`,
			isReserved: editMatchingGetValues('isCourtBooked'),
			cost: editMatchingGetValues('courtFee'),
			locationImg: editMatchingGetValues('locationImg'),
			content: editMatchingGetValues('mainText'),
		};
		console.log(e);
		console.log(editedData);
		// MatchesService.modifyMatchingList(props.postId, editedData)
		MatchesService.modifyMatchingList(1, editedData)
			.then(() => console.log('수정됨'))
			.catch((e) => console.log(e));
	};

	return (
		<>
			<SearchCourtDrawer
				isOpen={isSearchDrawerOpen}
				toggleDrawer={toggleSearchDrawer}
				setCourtInfos={setCourtInfos}
				setAddress={editMatchingSetValue}
			/>
			<PageTitleArea>
				<PageMainTitle>매칭 글 수정</PageMainTitle>
			</PageTitleArea>
			<PostMatchingForm onSubmit={onSubmit}>
				<InputBox>
					<label htmlFor='postTitle'>제목</label>
					<input
						id='postTitle'
						type='text'
						{...editMatchingResister('postTitle')}
						onChange={(e) => editMatchingSetValue('postTitle', e.target.value)}
					/>
				</InputBox>
				<HalfContainer>
					<InputBox>
						<label htmlFor='matchType'>경기 유형</label>
						<Selector
							idString='matchType'
							options={[
								{ value: 'SINGLE', label: '단식' },
								{ value: 'MIXED_SINGLE', label: '혼성 단식' },
								{ value: 'DOUBLE', label: '복식' },
								{ value: 'MIXED_DOUBLE', label: '혼성 복식' },
							]}
							value={editMatchingGetValues('matchType')}
							{...editMatchingResister('matchType')}
							onChangeHandler={(e: string) => {
								editMatchingSetValue('matchType', e);
								setNumOfAllPlayers(e.includes('SINGLE') ? 2 : 4);
								selectHandler(e);
							}}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='numOfRecruited'>모집 인원</label>
						<Selector
							idString='numOfRecruited'
							options={optionsForNOR}
							value={editMatchingGetValues('numOfRecruited')}
							{...editMatchingResister('numOfRecruited')}
							onChangeHandler={(e: number) => editMatchingSetValue('numOfRecruited', e)}
						/>
					</InputBox>
				</HalfContainer>

				<HalfContainer>
					<InputBox>
						<label htmlFor='selectedAge'>모집 연령대</label>
						<Selector
							idString='selectedAge'
							options={[
								{ value: 'TEENAGER', label: '10대' },
								{ value: 'TWENTIES', label: '20대' },
								{ value: 'THIRTIES', label: '30대' },
								{ value: 'FORTIES', label: '40대' },
								{ value: 'FIFTIES', label: '50대' },
								{ value: 'SIXTIES', label: '60대' },
							]}
							{...editMatchingResister('selectedAge')}
							onChangeHandler={(e: string) => editMatchingSetValue('selectedAge', e)}
							value={editMatchingGetValues('selectedAge')}
						/>
					</InputBox>

					<InputBox>
						<label htmlFor='selectedNTRP'>모집 NTRP</label>
						<Selector
							idString='selectedNTRP'
							options={[
								{ value: 'DEVELOPMENT', label: 'NewBie (1.0 ~ 2.0)' },
								{ value: 'BEGINNER', label: 'Beginner (2.5 ~ 3.5)' },
								{ value: 'INTERMEDIATE', label: 'Intermediate (4.0 ~ 4.5)' },
								{ value: 'ADVANCED', label: 'Advanced (5.0 ~ 5.5)' },
								{ value: 'PRO', label: 'Pro (6.0 ~ 7.0)' },
							]}
							{...editMatchingResister('selectedNTRP')}
							value={editMatchingGetValues('selectedNTRP')}
							onChangeHandler={(e: string) => {
								editMatchingSetValue('selectedNTRP', e);
							}}
						/>
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='matchDate'>경기일</label>
					<DPicker
						name='matchDate'
						setState={editMatchingSetValue}
						defaultValue={editMatchingGetValues('matchDate')}
					/>
					<HiddenInput
						type='text'
						id='matchDate'
						value={`${editMatchingGetValues('matchDate')}`}
						{...editMatchingResister('matchDate')}
						readOnly
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='matchStartTime'>시작 시간</label>
						<TPicker
							name='matchStartTime'
							setState={editMatchingSetValue}
							type={[true, true]}
							defaultValue={editMatchingGetValues('matchStartTime')}
						/>
						<HiddenInput
							type='text'
							id='matchStartTime'
							{...editMatchingResister('matchStartTime')}
							readOnly
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='matchEndTime'>종료 시간</label>
						<TPicker
							name='matchEndTime'
							setState={editMatchingSetValue}
							type={[true, true]}
							defaultValue={editMatchingGetValues('matchEndTime')}
						/>
						<HiddenInput
							type='text'
							id='matchEndTime'
							{...editMatchingResister('matchEndTime')}
							readOnly
						/>
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='deadlineDnT'>모집 마감 기한</label>
					<HalfContainer>
						<DPicker
							name='deadlineDate'
							setState={editMatchingSetValue}
							defaultValue={editMatchingGetValues('deadlineDate')}
							type={[true, true, true]}
						/>
						<HiddenInput
							type='text'
							id='deadlineDate'
							{...editMatchingResister('deadlineDate')}
							readOnly
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								editMatchingSetValue('deadlineDate', e.target.value);
								console.log(editMatchingGetValues('deadlineDate'));
							}}
						/>
						<TPicker
							name='deadlineTime'
							setState={editMatchingSetValue}
							type={[true, false]}
							defaultValue={editMatchingGetValues('deadlineTime')}
						/>
						<HiddenInput
							type='text'
							id='deadlineTime'
							{...editMatchingResister('deadlineTime')}
							readOnly
						/>
					</HalfContainer>
				</InputBox>

				<InputBox>
					<label htmlFor='courtAddress'>경기장 주소</label>
					<input
						type='text'
						id='courtAddress'
						value={editMatchingGetValues('courtAddress')}
						{...editMatchingResister('courtAddress')}
						onClick={(e) => {
							e.preventDefault();
							setIsSearchDrawerOpen(true);
						}}
						readOnly
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='isCourtBooked'>경기장 예약 여부</label>
						<ButtonStyleRadio
							idString='isCourtBooked'
							setState={editMatchingSetValue}
							defaultValue={editMatchingGetValues('isCourtBooked')}
							{...editMatchingResister('isCourtBooked')}
						/>
					</InputBox>
				</HalfContainer>
				<CourtFeeArea>
					<FeeForEachSpan>
						1인당{' '}
						{Number.isInteger(editMatchingGetValues('courtFee') / numOfAllPlayers)
							? `${editMatchingGetValues('courtFee') / numOfAllPlayers}`
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
							defaultValue={editMatchingGetValues('courtFee')}
							{...editMatchingResister('courtFee')}
							onChange={(e) => editMatchingSetValue('courtFee', parseInt(e.target.value))}
							onClick={() => {
								if (numOfAllPlayers === 1) setMessage('warning', '경기 유형을 먼저 선택해주세요!');
							}}
							// 포커스 옮기기
							// matchTypeREF.current.focus();
						/>
					</InputBox>
				</CourtFeeArea>

				<InputBox>
					<label htmlFor='courtPhoto'>경기장 이미지</label>
					<ImageArea onClick={clickImgFile}>
						<ImageBox width={'620px'} height={'400px'}>
							<img
								src={selectedImage || '/images/add-image-rectangle-00.png'}
								alt='경기장 이미지'
							/>
						</ImageBox>
						<input
							id='courtPhoto'
							type='file'
							style={{ display: 'none' }}
							ref={fileInputRef}
							onChange={handleFileChange}
							accept={'image/*'}
						/>
					</ImageArea>
				</InputBox>

				<InputBox>
					<label htmlFor='mainText'>본문 내용</label>
					<MainTextArea
						id={'mainText'}
						onChange={(e) => editMatchingSetValue('mainText', e.target.value)}
						placeholder='내용을 입력하세요.'
						{...editMatchingResister('mainText')}
					/>
				</InputBox>
				<HalfContainer>
					<Buttons colorstyle={'is-black'} type='submit'>
						{/* <Buttons colorstyle={'is-black'} type='submit' disabled={checkValidation()}> */}
						수정하기
					</Buttons>
					<Buttons colorstyle={'is-black'} onClick={moveToBack}>
						취소
					</Buttons>
				</HalfContainer>
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

		.select__CustomSelect-sc-10zdv74-0 {
			margin-bottom: 0px;
		}
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

const Buttons = styled(RoundButton)`
	margin: ${rem('30px')} 0px;
`;

const ImageArea = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	width: 100%;
	min-height: fit-content;
	max-width: ${rem('620px')};
	max-height: ${rem('400px')};
	border: none;
	margin-bottom: ${rem('30px')};
	overflow: hidden;

	img {
		width: 100%;
		max-height: ${rem('400px')};
		border-radius: 5px;
		border: 1px solid ${InputBorderColor};

		background: ${InputBoxColor};
		overflow: hidden;
	}

	div {
		max-height: ${rem('400px')};
		overflow: hidden;
	}
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
