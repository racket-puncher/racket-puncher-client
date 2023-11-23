import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';
import MyListItem from '../collapse';
import usersService from 'service/users/service';
import useCookies from 'utils/useCookies';

const listData = {};

interface IMyMatchingListProps {
	listType: 'hosted' | 'applied';
}

export default function MyMatchingList(props: IMyMatchingListProps) {
	// To-do
	// 리스트 없을 경우 나올 화면 연결

	const { getMyHostedMatchingList, getMyAppliedMatchingList } = usersService;
	const { listType } = props;
	const { getCookie } = useCookies();
	const [listData, setListData] = useState([]);

	useEffect(() => {
		const getNSetData = async (id: string) => {
			try {
				const res =
					listType === 'hosted'
						? await getMyHostedMatchingList(id)
						: await getMyAppliedMatchingList(id);
				console.log(res.data.response);
				setListData({ ...res.data.response });
			} catch (err) {
				console.log(err);
			}
		};
		getCookie('id') && getNSetData(getCookie('id'));
	}, []);

	return (
		<>
			<MyListContainer>
				{listData.map((_, i) => {
					return <MyListItem key={uuidv4()} postInfo={listData[i]} />;
				})}
			</MyListContainer>
		</>
	);
}

const MyListContainer = styled.ul`
	min-width: 100%;
	margin-top: ${rem('20px')};
`;
