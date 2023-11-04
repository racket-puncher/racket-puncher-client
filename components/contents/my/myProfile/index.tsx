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

interface IProfileProps {
	userInfos: {
		readonly userNickName: string;
		readonly age: number;
		readonly gender: string;
		readonly ntrp: string;
		readonly userAddress: string;
		readonly winningRate: Array<number>;
		readonly mannerPoint: number;
		readonly realName: string;
		readonly email: string;
		readonly imageURL: string;
	};
}

export default function MyProfile(props: IProfileProps) {
	const {
		userNickName,
		age,
		gender,
		ntrp,
		userAddress,
		winningRate,
		mannerPoint,
		realName,
		email,
		imageURL,
	} = props.userInfos;

	return (
		<>
			<MyProfileContainer>
				<ProfileImage width='280px' height='280px'>
					<img src={imageURL || ''} alt='프로필 사진' />
				</ProfileImage>
				<ProfileInfoArea>
					<ProfileInfoList id='Info01'>
						<ProfileInfoItem>
							<ItemName>닉네임 : </ItemName>
							<ItemContent>{userNickName || '-'}</ItemContent>
							<Badge> {ntrp || '-'} </Badge>
						</ProfileInfoItem>
						<ProfileInfoItem>
							<ItemName>연령/성별 :</ItemName>
							<ItemContent>
								만 {age || '-'}세 / {gender || '-'}
							</ItemContent>
						</ProfileInfoItem>
						<ProfileInfoItem>
							<ItemName>주소 : </ItemName>
							<ItemContent>{userAddress || '-'}</ItemContent>
						</ProfileInfoItem>
					</ProfileInfoList>

					<ProfileInfoList id='Info02'>
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
							<ItemContent>{mannerPoint || '-'} 점</ItemContent>
						</ProfileInfoItem>
					</ProfileInfoList>
					<ProfileInfoList id='Info03'>
						<ProfileInfoItem>
							<ItemName>실명 : </ItemName>
							<ItemContent>{realName || '-'}</ItemContent>
						</ProfileInfoItem>
						<ProfileInfoItem>
							<ItemName>이메일 : </ItemName>
							<ItemContent>{email || '-'}</ItemContent>
						</ProfileInfoItem>
					</ProfileInfoList>
				</ProfileInfoArea>
			</MyProfileContainer>
		</>
	);
}

const MyProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: ${rem('20px')};
	width: 100%;
	margin: ${rem('30px')} 0px;
`;
const ProfileImage = styled(ImageBox)`
	border-radius: ${rem('20px')};
	background-color: lightblue;
	max-width: ${rem('150px')};
	max-height: ${rem('150px')};
`;
const ProfileInfoArea = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: auto auto;
	grid-template-areas:
		'info01 info02'
		'info03 info03';
	min-width: 90%;
`;

const ProfileInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: left top;
	max-width: calc(100vw - ${rem('60px')});

	& #info01 {
		margin-right: ${rem('20px')};
	}s
`;

const ProfileInfoItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${rem('4px')};
	width: fit-content;
	margin-top: ${rem('15px')};
`;

const ItemName = styled.span`
	min-width: fit-content;
	font-family: ${FontFamilySemiBold};
	font-size: ${rem(`${FontSizeSpSm}`)};
	color: ${PrimaryColor};
`;
const ItemContent = styled.span`
	min-width: fit-content;
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
