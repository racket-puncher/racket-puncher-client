import React from 'react';
import styled from 'styled-components';
// import { rem } from 'polished';
import { RoundButton } from '../../styles/ts/components/buttons';
import { TabsProps } from 'antd';
import { CustomTab } from '../../styles/ts/components/tab';

import MyProfile from '../../components/contents/my/myProfile';
import MyMatchingList from '../../components/contents/my/myMatchingList';

const MyPage = () => {
	// To-do
	// infos get 요청

	const Infos = {
		nickname: '왕자',
		age: 30,
		gender: '남',
		address: '서울시 마포구',
		ntrp: 'Pro',
		winningRate: [1, 3],
		manner: 85,
		realName: '김개발',
		email: 'princeofracket@gmail.com',
		imageURL: '',
	};

	const items: TabsProps['items'] = [
		{
			key: 'submittedMatchingList',
			label: '등록한 매칭',
			children: <MyMatchingList type='submitted' />,
		},
		{
			key: 'applyedMatchingList',
			label: '신청한 매칭',
			children: <MyMatchingList type='applyed' />,
		},
	];

	return (
		<>
			<MyProfile infos={Infos} />
			<RoundButton colorstyle='is-black' aria-label='프로필 수정페이지로 이동'>
				프로필 수정
			</RoundButton>
			<ListArea>
				<CustomTab defaultActiveKey='1' items={items} />
				<div>매칭 리스트 탭 컴포넌트</div>
				<ul>
					리스트 컴포넌트
					<li>드롭박스</li>
				</ul>
			</ListArea>
		</>
	);
};

export default MyPage;

const ListArea = styled.div`
	margin-top: 30px;
`;
