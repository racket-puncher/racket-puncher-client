import React from 'react';
import styled from 'styled-components';
// import { rem } from 'polished';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton } from '../../styles/ts/components/buttons';

export default function Post() {
	// To-do
	// - 주소검색, 달력 적용하기
	// - onSubmit 구현
	// - Toast 적용

	return (
		<>
			<PageMainTitle>매칭 글 등록</PageMainTitle>
			<PostForm>
				<InputBox>
					<label htmlFor='postTitle'>제목</label>
					<input id='postTitle' type='text' />
				</InputBox>
				<InputBox>
					<label htmlFor='ageGroup'>연령대</label>
					<input id='ageGroup' type='dropbox' />
				</InputBox>
				<InputBox>
					<label htmlFor='matchType'>경기 유형</label>
					<input id='matchType' type='text' />
				</InputBox>
				<InputBox>
					<label htmlFor='ntrp'>NTRP</label>
					<input id='ntrp' type='text' />
				</InputBox>
				<InputBox>
					<label htmlFor='courtInfo'>구장정보</label>
					<input onClick={() => console.log('경기장검색열기')} id='courtInfo' type='text' />
				</InputBox>
				<InputBox>
					<label htmlFor='matchDate'>경기 일시</label>
					<input id='matchDate' type='text' />
				</InputBox>

				<BookingInputBox>
					<label htmlFor='bookingO'>경기장 예약 여부</label>
					<BookingArea>
						<input value='예약 O' type='text' disabled />
						<input value='예약 X' type='text' disabled />
					</BookingArea>
				</BookingInputBox>

				<InputBox>
					<label htmlFor='postContent'>본문 내용</label>
					<input id='postContent' type='text' />
				</InputBox>
				<RoundButton type={'is-black'}>등록하기</RoundButton>
			</PostForm>
		</>
	);
}

const PostForm = styled.form`
	display: grid;
	grid-template-rows: repeat(9, 1fr);
`;

const BookingInputBox = styled(InputBox)`
	input {
		width: 100%;
		text-align: center;
	}
`;
const BookingArea = styled.div`
	display: flex;
	gap: 20px;
`;
