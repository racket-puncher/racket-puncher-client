import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { RoundButton } from 'styles/ts/components/buttons';
import { TabsProps } from 'antd';
import { CustomTab } from 'styles/ts/components/tab';

import MyProfile from 'components/contents/my/myProfile';
import MyMatchingList from 'components/contents/my/myMatchingList';
import useCookies from 'utils/useCookies';
import useToast from 'utils/useToast';
// import { useRouter } from 'next/router';
import useRouterHook from 'utils/useRouterHook';
import Link from 'next/link';
// import AuthService from 'service/auth/service';

const MyPage = () => {
	// 프로필 수정 페이지 라우팅

	const { checkLogin, getCookie } = useCookies();
	// const { getNewToken } = AuthService;
	const { setMessage } = useToast();
	const { replace } = useRouterHook();
	const [userId, setUserId] = useState('');
	useEffect(() => {
		if (!checkLogin()) {
			setMessage('error', '로그인이 필요한 서비스입니다.');
			replace('/login');
		} else {
			// getNewToken({
			// 	accessToken: getCookie('accessToken'),
			// 	refreshToken: getCookie('refreshToken'),
			// });
			setUserId(getCookie('id'));
		}
	}, []);

	const items: TabsProps['items'] = [
		{
			key: 'hostedMatchingList',
			label: '등록한 매칭',
			children: <MyMatchingList listType='hosted' userId={userId} />,
		},
		{
			key: 'appliedMatchingList',
			label: '신청한 매칭',
			children: <MyMatchingList listType='applied' userId={userId} />,
		},
	];

	return (
		<>
			<MyProfile userId={userId} />
			<Link href={'/edit-my-info'} aria-label='프로필 수정페이지로 이동'>
				<RoundButton colorstyle='is-black'>프로필 수정</RoundButton>
			</Link>
			<ListArea>
				<CustomTab items={items} />
			</ListArea>
		</>
	);
};

export default MyPage;

const ListArea = styled.div`
	margin-top: ${rem('30px')};
`;
