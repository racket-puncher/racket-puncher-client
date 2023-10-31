import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImageBox } from '../../../../styles/ts/components/box';
import {
	FontSizeMc,
	FontSizeSpSm,
	FontFamilySemiBold,
	FontFamilyRegular,
	PrimaryColor,
	BlackColor,
	WhiteColor,
} from '../../../../styles/ts/common';

interface IProfile {
	infos: {
		readonly nickname: string;
		readonly age: number;
		readonly gender: string;
		readonly ntrp: string;
		readonly address: string;
		readonly winningRate: Array<number>;
		readonly manner: number;
		readonly realName: string;
		readonly email: string;
		readonly imageURL: string;
	};
}

export default function MyProfile(props: IProfile) {
	const { nickname, age, gender, ntrp, address, winningRate, manner, realName, email, imageURL } =
		props.infos;

	return (
		<>
			<MyProfileContainer>
				<ProfileImage width='280px' height='280px'>
					<img src={imageURL} alt='프로필 사진' />
				</ProfileImage>
				<ProfileInfoList>
					<ProfileInfoItem>
						<ItemName>닉네임 : </ItemName>
						<ItemContent>{nickname || '-'}</ItemContent>
						<Badge> {ntrp || '-'} </Badge>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>연령 :</ItemName>
						<ItemContent>만 {age || '-'}세</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>성별 : </ItemName>
						<ItemContent>{gender || '-'}</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>주소 : </ItemName>
						<ItemContent>{address || '-'}</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>NTRP : </ItemName>
						<ItemContent>{ntrp || '-'}</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>승률 : </ItemName>
						<ItemContent>
							{winningRate[0] || '-'}승 {winningRate[1] || '-'}패
						</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>매너점수 : </ItemName>
						<ItemContent>{manner || '-'} 점</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>실명 : </ItemName>
						<ItemContent>{realName || '-'}</ItemContent>
					</ProfileInfoItem>
					<ProfileInfoItem>
						<ItemName>이메일 : </ItemName>
						<ItemContent>{email || '-'}</ItemContent>
					</ProfileInfoItem>
				</ProfileInfoList>
			</MyProfileContainer>
		</>
	);
}

const MyProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${rem('20px')};
	width: 100%;
	height: 280px;
	margin: ${rem('30px')} 0px;
`;

const ProfileImage = styled(ImageBox)`
	border-radius: ${rem('20px')};
	background-color: lightblue;
`;

const ProfileInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${rem('15px')};
`;

const ProfileInfoItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${rem('4px')};
`;

const ItemName = styled.span`
	font-family: ${FontFamilySemiBold};
	font-size: ${rem(`${FontSizeSpSm}`)};
	color: ${PrimaryColor};
`;
const ItemContent = styled.span`
	font-family: ${FontFamilyRegular};
	font-size: ${rem(`${FontSizeSpSm}`)};
	color: ${BlackColor};
`;

const Badge = styled.div`
	display: inline-block;
	width: ${rem('41px')};
	height: ${rem('20px')};
	background-color: ${PrimaryColor};
	border-radius: ${rem('10px')};

	text-align: center;
	color: ${WhiteColor};
	font-size: ${rem(`${FontSizeMc}`)};
	line-height: ${rem('18px')};
	font-familiy ${FontFamilySemiBold};
`;
