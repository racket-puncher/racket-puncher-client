import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SquareButton } from '../../../styles/ts/components/buttons';
import { ImageBox } from '../../../styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	FontFamilySemiBold,
	FontSizeLg,
	LightGrayColor,
} from '../../../styles/ts/common';

interface IPlayerCardProps {
	userNickName?: string;
	userId?: string;
	profilePicURL?: string;
}

export default function PlayerCard(props: IPlayerCardProps) {
	// To do
	// iphoneSE 최적화
	// 정보, 신고 기능 구현

	const { userNickName, profilePicURL } = props;
	return (
		<PlayerCardContainer>
			<PlayerPicture>
				<ImageBox width='80px' height='80px'>
					<img src={profilePicURL || '-'} alt='프로필 이미지' />
				</ImageBox>
			</PlayerPicture>
			<PlayerName>{userNickName || '라켓왕자'}</PlayerName>
			<ButtonArea>
				<SquareButton width='80px' height='40px' colorstyle='is-black'>
					정보
					{/* 기능구현시 userId 필요 */}
				</SquareButton>
				<SquareButton width='80px' height='40px' colorstyle='is-white' bordercolor='is-lightGray'>
					신고
					{/* 기능구현시 userId 필요 */}
				</SquareButton>
			</ButtonArea>
		</PlayerCardContainer>
	);
}

const PlayerCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: ${rem('100px')};
	padding: ${rem('10px')};
	background-color: ${WhiteColor};
	border: solid 1px ${LightGrayColor};
	border-radius: ${rem('10px')};
`;

const PlayerPicture = styled.div`
	display: inline-block;
	border-radius: ${rem('10px')};
	overflow: hidden;
`;

const PlayerName = styled.span`
	flex: 1;
	margin: 0px ${rem('20px')};
	font-family: ${FontFamilySemiBold};
	font-size: ${FontSizeLg};
	color: ${BlackColor};
`;

const ButtonArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${rem('10px')};
`;
