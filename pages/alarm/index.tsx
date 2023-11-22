import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';
import { PageMainTitle } from '../../styles/ts/components/titles';
import AlarmListItem from 'components/contents/alarm/AlarmListItem';
import useCookies from 'utils/useCookies';
import usersService from 'service/users/service';

// 오프라인용 데이터
const gottenAlarms = [
	{
		matchingId: '',
		title: '매칭 취소',
		content: '매칭이 취소 되었습니다.',
	},
	{
		matchingId: '',
		title: '경기 디데이!',
		content: '오늘은 즐거운 테니스 경기가 있는 날입니다!',
	},
	{
		matchingId: '',
		title: '날씨 알림',
		content: '최저기온 12˚, 최고기온 22˚, 맑음',
	},
];

export default function AlarmPage() {
	// // 서버에서 현재 로그인한 유저의 알림 데이터 가져오기
	// const gottenAlarms = 현재 로그인한 유저의 알림 데이터

	const { getCookie } = useCookies();
	const { getAlarmList } = usersService;
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const getNSsetData = async (id: string) => {
			try {
				const res = await getAlarmList(id);
				const data = res.data.response;
				console.log(data);
				setNotifications(data);
			} catch (err) {
				console.log(err);
			}
		};
		getCookie('id') && getNSsetData(getCookie('id'));
	}, []);

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>알림</PageMainTitle>
			</PageTitleArea>
			<AlarmList>
				{gottenAlarms.map((ele) => {
					return <AlarmListItem key={uuidv4()} alarmData={ele} />;
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
	min-height: calc(100vh - ${rem('240px')});
`;
