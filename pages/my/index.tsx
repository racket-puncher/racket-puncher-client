import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { RoundButton } from '../../styles/ts/components/buttons';
import { TabsProps } from 'antd';
import { CustomTab } from '../../styles/ts/components/tab';

import MyProfile from '../../components/contents/my/myProfile';
import MyMatchingList from '../../components/contents/my/myMatchingList';
import useCookies from '../../utils/useCookies';
import useToast from '../../utils/useToast';
import { useRouter } from 'next/router';
import useRouterHook from 'utils/useRouterHook';

const items: TabsProps['items'] = [
	{
		key: 'hostedMatchingList',
		label: '등록한 매칭',
		children: <MyMatchingList listType='hosted' />,
	},
	{
		key: 'appliedMatchingList',
		label: '신청한 매칭',
		children: <MyMatchingList listType='applied' />,
	},
];

const MyPage = (userId: string) => {
	// 프로필 수정 페이지 라우팅

	const { checkLogin, getCookie } = useCookies();
	const { setMessage } = useToast();
	const { replace } = useRouterHook();
	// useEffect(() => {
	// 	if (!checkLogin()) {
	// 		setMessage('error', '로그인이 필요한 서비스입니다.');
	// 		replace('/login');
	// 	}
	// }, []);

	return (
		<>
			<MyProfile userId={'5'} />
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
	margin-top: ${rem('30px')};
`;
