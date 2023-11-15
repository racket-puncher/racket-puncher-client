import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
	ReportColor,
} from 'styles/ts/common';
import { PageMainTitle } from 'styles/ts/components/titles';
import { InputBox } from 'styles/ts/components/input';
import { RoundButton, SquareButton } from 'styles/ts/components/buttons';
import { CustomSelect } from 'styles/ts/components/select';
import { ImageBox } from 'styles/ts/components/box';
import { TextArea } from 'styles/ts/components/textarea';
import DPicker from 'components/contents/postMatching/datePicker/DPicker';
import TPicker from 'components/contents/postMatching/timePicker/TPicker';
import ButtonStyleRadio from 'components/common/buttonRadio';
import SearchCourtDrawer from 'components/contents/postMatching/searchCourtDrawer';

export default function EditMatching() {
	// To-do
	// 매칭글id로 기존 글 데이터 받아오기
	// useEffect(() => {GET});
	// onSubmit 구현
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정

	const [postTitle, setPostTitle] = useState('');
	const [matchType, setMatchType] = useState('');
	const [optionsForNOR, setOptionsForNOR] = useState([
		{ value: 1, label: '경기 유형을 먼저 선택해주세요.' },
	]);
	const [numOfRecruited, setNumOfRecruited] = useState(0);
	const selectMatchType = (e: string) => {
		setMatchType(e);
		e.includes('단식')
			? setOptionsForNOR([{ value: 1, label: '1 명' }])
			: setOptionsForNOR([
					{ value: 1, label: '1 명' },
					{ value: 2, label: '2 명' },
					{ value: 3, label: '3 명' },
			  ]);
	};

	const [selectedAge, setSelectedAge] = useState('');
	const [selectedNTRP, setSelectedNTRP] = useState('');

	const [matchDate, setMatchDate] = useState(null);
	const [matchStartTime, setMatchStartTime] = useState('');
	const [matchEndTime, setMatchEndTime] = useState('');
	const [deadlineDateNTime, setDeadlineDateNTime] = useState('');

	const [courtAddress, setCourtAddress] = useState('');
	const [isCourtBooked, setIsCourtBooked] = useState(null);
	const [courtFee, setCourtFee] = useState(0);
	const [numOfAllPlayers, setNumOfAllPlayers] = useState(1);
	const [feeForEach, setFeeForEach] = useState(0);

	const [selectedImage, setSelectedImage] = useState(null);
	const [mainText, setMainText] = useState('');
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
			setSelectedImage(selectedFile);
		}
	};

	const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
	const toggleSearchDrawer = () => setIsSearchDrawerOpen((prev: boolean) => !prev);

	const submitFunction = () => {
		console.log('제목: ' + `${postTitle}`);
		console.log('경기 유형: ' + `${matchType}`);
		console.log('모집 인원: ' + `${numOfRecruited}`);

		console.log('모집 연령대: ' + `${selectedAge}`);
		console.log('모집 NTRP: ' + `${selectedNTRP}`);

		console.log('경기 날짜: ' + `${matchDate}`);
		console.log('경기 시작 시간: ' + `${matchStartTime}`);
		console.log('경기 종료 시간: ' + `${matchEndTime}`);
		console.log('모집 마감 기한: ' + `${deadlineDateNTime}`);

		console.log('구장 주소: ' + `${courtAddress}`);
		console.log('구장 예약 여부 ' + `${isCourtBooked}`);
		console.log('구장 예약비: ' + `${courtFee}`);
		console.log('인원수: ' + `${numOfAllPlayers}`);

		console.log('구장 이미지: ' + `${selectedImage.name}`);
		console.log('본문: ' + `${mainText}`);
	};
	return (
		<>
			<SearchCourtDrawer
				isOpen={isSearchDrawerOpen}
				toggleDrawer={toggleSearchDrawer}
				setState={setCourtAddress}
			/>
			<PageTitleArea>
				<PageMainTitle>매칭 글 수정</PageMainTitle>
			</PageTitleArea>
			<PostMatchingForm
				onSubmit={(e) => {
					e.preventDefault();
					submitFunction();
				}}>
				<InputBox>
					<label htmlFor='title'>제목</label>
					<input id='title' type='text' onChange={(e) => setPostTitle(e.target.value)} />
				</InputBox>
				<HalfContainer>
					<InputBox>
						<label htmlFor='typeOfMatch'>경기 유형</label>
						<CustomSelect
							id='typeOfMatch'
							options={[
								{ value: '단식', label: '단식' },
								{ value: '혼성 단식', label: '혼성 단식' },
								{ value: '복식', label: '복식' },
								{ value: '혼성 복식', label: '혼성 복식' },
							]}
							onSelect={(e: string) => {
								selectMatchType(e);
								setNumOfAllPlayers(e.includes('단') ? 2 : 4);
							}}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='numOfAllPlayers'>모집 인원</label>
						<CustomSelect
							id='numOfAllPlayers'
							options={optionsForNOR}
							onSelect={(e: number) => setNumOfRecruited(e)}
						/>
					</InputBox>
				</HalfContainer>
				<HalfContainer>
					<InputBox>
						<label htmlFor='postAge'>모집 연령대</label>
						<CustomSelect
							id='postAge'
							options={[
								{ value: '10 대', label: '10 대' },
								{ value: '20 대', label: '20 대' },
								{ value: '30 대', label: '30 대' },
								{ value: '40 대', label: '40 대' },
								{ value: '50 대', label: '50 대' },
								{ value: '60 대', label: '60 대' },
							]}
							onSelect={(e: string) => setSelectedAge(e)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='postNTRP'>모집 NTRP</label>
						<CustomSelect
							id='postNTRP'
							options={[
								{ value: 'NewBie', label: 'NewBie (1.0 ~ 2.0)' },
								{ value: 'Beginner', label: 'Beginner (2.5 ~ 3.5)' },
								{ value: 'Intermediate', label: 'Intermediate (4.0 ~ 4.5)' },
								{ value: 'Intermediate', label: 'Advanced (5.0 ~ 5.5)' },
								{ value: 'Pro', label: 'Pro (6.0 ~ 7.0)' },
							]}
							onSelect={(e: string) => {
								setSelectedNTRP(e);
							}}
						/>
					</InputBox>
				</HalfContainer>
				{/* 
				<InputBox>
					<label htmlFor='startDateNTime'>경기 시작 일시</label>
					<DPicker id='startDateNTime' />
				</InputBox>
				<InputBox>
					<label htmlFor='endDateNTime'>경기 종료 일시</label>
					<DPicker id='endDateNTime' />
				</InputBox> */}

				<InputBox>
					<label htmlFor='matchDate'>경기일</label>
					<DPicker id='matchDate' setState={setMatchDate} />
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='startTime'>시작 시간</label>
						<TPicker id='startTime' setState={setMatchStartTime} />
					</InputBox>
					<InputBox>
						<label htmlFor='endTime'>종료 시간</label>
						<TPicker id='endTime' setState={setMatchEndTime} />
					</InputBox>
				</HalfContainer>

				{/* <HalfContainer>
					<InputBox>
						<label htmlFor='deadlineDate'>모집 마감 기한</label>
						<DPicker id='deadlineDate' setState={setMatchDate} />
					</InputBox>
					<InputBox>
						<label htmlFor='deadlineTime'>.</label>
						<TPicker id='deadlineTime' setState={} />
					</InputBox>
				</HalfContainer> */}
				<InputBox>
					<label htmlFor='deadline'>모집 마감 기한</label>
					<CustomSelect id='deadline' />
					{/* placeholder={'모집이 마감될 시간을 선택해주세요.'} */}
					{/* <DPicker id='deadlineDate' setState={setDeadlineDateNTime} /> */}
				</InputBox>

				<InputBox>
					<label htmlFor='courtLocation'>구장 주소</label>
					<InputStyleBtn
						id='courtLocation'
						onClick={(e) => {
							e.preventDefault();
							setIsSearchDrawerOpen(true);
						}}
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='confirmReservation'>경기장 예약 여부</label>
						<ButtonStyleRadio id='confirmReservation' setState={setIsCourtBooked} />
					</InputBox>
				</HalfContainer>
				<CourtFeeArea>
					<FeeForEachSpan>1인당 {`${feeForEach}`} 원</FeeForEachSpan>
					<InputBox>
						<label htmlFor='courtFee'>구장 대여비</label>
						<input
							type='text'
							id='courtFee'
							className='text-align-right'
							pattern='^[0-9]+$'
							onChange={(e) => {
								setCourtFee(Number(e.target.value));
								const fee = Math.round(Number(e.target.value) / numOfAllPlayers);
								setFeeForEach(fee);
							}}
							// numOfAllPlayer === 1 이면 얼러트 띄우기
							onClick={() => {
								if (numOfAllPlayers === 1) alert('경기 유형을 먼저 선택해주세요!');
							}}
						/>
					</InputBox>
				</CourtFeeArea>

				<InputBox>
					<label htmlFor='courtPhoto'>구장 이미지</label>
					<ImageSection onClick={clickImgFile}>
						<ImageBox width={'580px'} height={'380px'}>
							{/* <img src='/images/add-image-rectangle-00.png' alt='add-image' /> */}
							<img src='/images/add-image-rectangle-00.png' alt='add-image' />
						</ImageBox>
						<input
							type='file'
							style={{ display: 'none' }}
							ref={fileInputRef}
							onChange={handleFileChange}
							accept={'image/*'}
						/>
					</ImageSection>
				</InputBox>

				<InputBox>
					<label htmlFor='postContent'>본문 내용</label>
					<MainTextArea
						id={'postContent'}
						value={mainText}
						onChange={(e) => setMainText(e.target.value)}
						placeholder='내용을 입력하세요.'
					/>
				</InputBox>

				<SubmitBtn colorstyle={'is-black'} type='submit'>
					등록하기
				</SubmitBtn>
			</PostMatchingForm>
		</>
	);
}

// const PostMatchingContainer = styled.div``;

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

const InputStyleBtn = styled(SquareButton)`
	height: ${rem('50px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 0 15px;
	text-align: center;

	&:focus {
		border: 1px solid ${PrimaryColor};
		outline: none;
	}
`;

const SubmitBtn = styled(RoundButton)`
	margin: ${rem('30px')} 0px;
`;

const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	width: 100%;
	height: 100%;
	max-width: ${rem('580px')};
	max-height: ${rem('380px')};
	border: none;
	img {
		border-radius: 5px;
		border: 1px solid ${InputBorderColor};

		background: ${InputBoxColor};
		overflow: hidden;
	}
`;

const MainTextArea = styled(TextArea)`
	max-width: ${rem('580px')};
	height: ${rem('380px')};
`;
