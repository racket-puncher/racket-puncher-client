// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { PageMainTitle } from '../../styles/ts/components/titles';
import AlarmListItem from './AlarmListItem';

export default function AlarmPage() {
	// // 서버에서 현재 로그인한 유저의 알림 데이터 가져오기
	// const gottenAlarms = 현재 로그인한 유저의 알림 데이터
	// useEffect(() => {

	// }, [gottenAlarms]);

	const gottenAlarms = [
		{
			alarmId: '',
			alarmTitle: '매칭 취소',
			alarmContent: '의 매칭이 취소 되었습니다.',
			pageTitle: '글제목1',
			pageURL: '',
		},
		{
			alarmId: '',
			alarmTitle: '경기 디데이!',
			alarmContent: '의 경기날입니다!',
			pageTitle: '글제목2',
			pageURL: '',
		},
	];

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>알림</PageMainTitle>
			</PageTitleArea>
			<AlarmList>
				{gottenAlarms.map((_, i) => {
					return <AlarmListItem key={0 + i} alarmTestData={gottenAlarms[i]} />;
				})}
			</AlarmList>
		</>
	);
}

const PageTitleArea = styled.div`
	margin: ${rem('50px')} auto;
`;

const AlarmList = styled.ul`
	width: 100%;
	min-height: rem(calc(100vh - ${rem('80px')}));
`;
