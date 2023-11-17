import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { rem } from 'polished';
import { RoundButton } from '../../styles/ts/components/buttons';
import { TabsProps } from 'antd';
import { CustomTab } from '../../styles/ts/components/tab';

import MyProfile from '../../components/contents/my/myProfile';
import MyMatchingList from '../../components/contents/my/myMatchingList';
import useCookies from '../../utils/useCookies';
import useToast from '../../utils/useToast';
import { useRouter } from 'next/router';

const MyPage = () => {
	const { checkLogin } = useCookies();
	const { error, contextHolder } = useToast();
	const router = useRouter();

	// To-do
	// userInfos get 요청

	const userInfos = {
		userNickName: '왕자',
		age: 30,
		gender: '남',
		userAddress: '서울시 성동구',
		ntrp: 'Pro',
		winningRate: [1, 3],
		mannerPoint: 85,
		realName: '김개발',
		email: 'princeofracket@gmail.com',
		imageURL: '',
	};

	const items: TabsProps['items'] = [
		{
			key: 'submittedMatchingList',
			label: '등록한 매칭',
			children: <MyMatchingList listType='submitted' />,
		},
		{
			key: 'appliedMatchingList',
			label: '신청한 매칭',
			children: <MyMatchingList listType='applied' />,
		},
	];

	useEffect(() => {
		if (!checkLogin()) {
			router.replace('/login');
		}
	}, []);

	return (
		<>
			{contextHolder}
			<MyProfile userInfos={userInfos} />
			<RoundButton colorstyle='is-black' aria-label='프로필 수정페이지로 이동'>
				프로필 수정
			</RoundButton>
			<ListArea>
				<CustomTab defaultActiveKey='1' items={items} />
			</ListArea>
		</>
	);
};

export default MyPage;

const ListArea = styled.div`
	margin-top: 30px;
`;
