import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';
import MyListItem from '../collapse';
import usersService from 'service/users/service';

interface IMyMatchingListProps {
	listType: 'hosted' | 'applied';
}

export default function MyMatchingList(props: IMyMatchingListProps) {
	// To-do
	// 리스트 없을 경우 나올 화면 연결

	const { getMyHostedMatchingList, getMyAppliedMatchingList } = usersService;
	const { listType } = props;
	const [listData, setListData] = useState([]);

	useEffect(() => {
		const getNSsetData = async (userId: string) => {
			try {
				const res =
					listType === 'hosted'
						? await getMyHostedMatchingList(`${userId}`)
						: await getMyAppliedMatchingList(`${userId}`);
				console.log(res.data.response);
				setListData(res.data.response);
			} catch (err) {
				console.log(err);
			}
		};
		getNSsetData('5');
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
