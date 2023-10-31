import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SquareButton } from '../../../styles/ts/components/buttons';
import { ImageBox } from '../../../styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	FontFamilySemiBold,
	InputBorderColor,
} from '../../../styles/ts/common';

export default function PlayerCard() {
	return (
		<PlayerCardContainer>
			<PlayerPicture>
				<ImageBox width='80px' height='80px'>
					<img
						src='https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg'
						alt='프로필 이미지'
					/>
				</ImageBox>
			</PlayerPicture>
			<PlayerName>이름</PlayerName>
			<SquareButton width='75px' height='34px' colorstyle='is-black'>
				정 보
			</SquareButton>
			<SquareButton width='75px' height='34px' colorstyle='is-white'>
				신 고
			</SquareButton>
		</PlayerCardContainer>
	);
}

const PlayerCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	height: ${rem('100px')};
	margin: ${rem('20px')} 0px;
	padding: ${rem('10px')};
	border: solid 1px ${InputBorderColor};
	border-radius: ${rem('10px')};

	background-color: ${WhiteColor};
`;

const PlayerPicture = styled.div`
	display: inline-block;
	border-radius: ${rem('10px')};
	overflow: hidden;
`;

const PlayerName = styled.span`
	font-family: ${FontFamilySemiBold};
	color: ${BlackColor};
`;
