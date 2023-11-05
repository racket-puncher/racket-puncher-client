import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
	ReportColor,
} from '../../styles/ts/common';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';

import DPicker from './DPicker';
import ButtonStyleRadio from '../../components/contents/post/radio';
import { TextArea } from '../../styles/ts/components/textarea';
// import TPicker from './TPicker';

export default function writePost() {
	// To-do
	// 이미지 첨부 구현
	// 라디오 리팩토링
	// 경기장 검색 기능 구현
	// onSubmit 구현
	// Toast 적용
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정

	const [courtFee, setCourtFee] = useState(0);
	const [numOfPlayers, setNumOfPlayers] = useState(4);
	const [feeForEach, setFeeForEach] = useState(0);

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>매칭 글 등록</PageMainTitle>
			</PageTitleArea>
			<PostMatchingForm onSubmit={(e) => e.preventDefault()}>
				<InputBox>
					<label htmlFor='title'>제목</label>
					<input id='title' type='text' />
				</InputBox>
				<HalfContainer>
					<InputBox>
						<label htmlFor='typeOfMatch'>경기 유형</label>
						<CustomSelect id='typeOfMatch' />
					</InputBox>
					<InputBox>
						<label htmlFor='numOfPlayers'>모집 인원</label>
						<CustomSelect id='numOfPlayers' />
					</InputBox>
				</HalfContainer>
				<HalfContainer>
					<InputBox>
						<label htmlFor='postAge'>연령대</label>
						<CustomSelect id='postAge' />
					</InputBox>
					<InputBox>
						<label htmlFor='postNTRP'>NTRP</label>
						<CustomSelect id='postNTRP' />
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='startDateNTime'>경기 시작 일시</label>
					<DPicker id='startDateNTime' />
				</InputBox>
				<InputBox>
					<label htmlFor='endDateNTime'>경기 종료 일시</label>
					<DPicker id='endDateNTime' />
				</InputBox>

				{/* <HalfContainer>
					<InputBox>
						<label htmlFor='startTime'>시작 시간</label>
						<TPicker id='startTime' />
						
					</InputBox>
					<InputBox>
						<label htmlFor='endTime'>종료 시간</label>
						<TPicker id='endTime' />
					
					</InputBox>
				</HalfContainer> */}

				<InputBox>
					<label htmlFor='closeLimit'>모집 마감 기한</label>
					<CustomSelect id='closeLimit' />
				</InputBox>

				<InputBox>
					<label htmlFor='courtInfo'>구장 정보</label>
					<InputStyleBtn
						id='courtInfo'
						onClick={(e) => {
							e.preventDefault();
							console.log('클릭됨');
						}}
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='bookedO'>경기장 예약 여부</label>
						<ButtonStyleRadio />
					</InputBox>
				</HalfContainer>
				<CourtFeeArea>
					<FeeForEachSpan>1인당 {`${Math.round(courtFee / numOfPlayers)}`} 원</FeeForEachSpan>
					<InputBox>
						<label htmlFor='courtFee'>구장 대여비</label>
						<input
							type='text'
							id='courtFee'
							className='text-align-right'
							pattern='^[0-9]+$'
							// onChange={(e) => setCourtFee(e.target.value)}
							// 타입오류 리팩토링 필요
						/>
					</InputBox>
				</CourtFeeArea>

				<InputBox>
					<label htmlFor='courtPhoto'>구장 이미지</label>
					{/* <ImageSection onClick={clickImgFile}>
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
					</ImageSection> */}
				</InputBox>

				<InputBox>
					<label htmlFor='postContent'>본문 내용</label>
					<TextArea id='postContent' />
				</InputBox>

				<SubmitBtn colorstyle={'is-black'}>등록하기</SubmitBtn>
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
