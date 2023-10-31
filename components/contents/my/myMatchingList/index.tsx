import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImgButton, RoundButton } from '../../../../styles/ts/components/buttons';
import { ImageBox } from '../../../../styles/ts/components/box';
import {
	PrimaryColor,
	WhiteColor,
	PlayerListBGColor,
	FontSizeSm,
} from '../../../../styles/ts/common';
import PlayerCard from '../../../common/playerCard';

interface IMyMachingListProps {
	type: string;
}

export default function MyMatchingList(props: IMyMachingListProps) {
	// To-do
	// 분기처리
	// json-server
	// 트랜지션

	return (
		<>
			<MathcingListContainer>
				<MatchingListItem>
					<ListTitle>
						<PostDate>2023/11/15</PostDate>
						<PostTitle>제목 및 정보</PostTitle>
						<ImgButton aria-label='참가자 리스트 펼치기'>
							<ImageBox width='24px' height='24px'>
								<img src='' alt='화살표 아이콘' />
							</ImageBox>
						</ImgButton>
					</ListTitle>
					<PlayersList style={{ display: 'none' }}>
						{/* <PlayersList> */}
						<PlayerCard />
						<PlayerCard />
						<PlayerCard />
					</PlayersList>
				</MatchingListItem>

				<MatchingListItem>
					<ListTitle>
						<PostDate>2023/11/15</PostDate>
						<PostTitle>제목 및 정보</PostTitle>
						<ImgButton aria-label='참가자 리스트 펼치기'>
							<ImageBox width='24px' height='24px'>
								<img src='' alt='화살표 아이콘' />
							</ImageBox>
						</ImgButton>
					</ListTitle>
					<PlayersList style={{ display: 'none' }}>
						{/* <PlayersList> */}
						<PlayerCard />
						<PlayerCard />
						<PlayerCard />
					</PlayersList>
				</MatchingListItem>

				<MatchingListItem>
					<ListTitle>
						<PostDate>2023/11/15</PostDate>
						<PostTitle>제목 및 정보</PostTitle>
						<ImgButton aria-label='참가자 리스트 펼치기'>
							<ImageBox width='24px' height='24px'>
								<img src='' alt='화살표 아이콘' />
							</ImageBox>
						</ImgButton>
					</ListTitle>
					<PlayersList style={{ display: 'none' }}>
						{/* <PlayersList> */}
						<PlayerCard />
						<PlayerCard />
						<PlayerCard />
					</PlayersList>
				</MatchingListItem>
			</MathcingListContainer>
		</>
	);
}

const MathcingListContainer = styled.ul`
	width: 100%;
	margin-top: ${rem('20px')};
`;

const MatchingListItem = styled.li`
	width: 100%;
	margin-bottom: ${rem('30px')};
`;

const ListTitle = styled.div`
	display: flex;
	align-items: center;
	gap: ${rem('15px')};
	width: 100%;
	height: ${rem('60px')};
	padding: ${rem('20px')};
	background-color: ${PrimaryColor};
	border: none;
	border-radius: 20px;

	color: ${WhiteColor};
	font-family: Pretendard-Medium;
	font-size: ${rem(`${FontSizeSm}`)};
`;

const PlayersList = styled.ul`
	width: 100%;
	height: auto;
	padding: ${rem('20px')};
	border: none;
	border-radius: 0 0 20px 20px;
	background-color: ${PlayerListBGColor};
`;

const PostDate = styled.span``;

const PostTitle = styled.span`
	flex: 1;
`;
