import React, { useState, ReactNode, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ModalBox from '../../modal';
import { ImageBox } from '../../../../styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	PrimaryColor,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeMd,
	FontSizeMc,
} from '../../../../styles/ts/common';

interface IUserInfoModalProps {
	readonly userNickName: string;
	readonly userEmail: string;
	readonly profilePicURL: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
}

const userInfo = {
	registeredDate: '2023/05/15',
	userEmail: 'bboongbboong2@gmail.com',
	userName: '최연희',
	phoneNumber: '01000000000',
	userAddress: '서울 마포구',
	userNickName: '뿡뿡이',
	profilePicURL:
		'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
	ageGroup: '20대',
	gender: '여',
	NTRP: 'Beginner',
	winningRate: [5, 4, 1],
	mannerPoint: '90',
};

export default function UserInfoModal(props: IUserInfoModalProps) {
	const { userNickName, userEmail, profilePicURL, isOpen, toggleModal, onCancel } = props;
	// userEmail로 회원정보(userInfo) 불러오기
	// useEffect(()=> userEmail)
	const { userAddress, gender, NTRP, winningRate, mannerPoint } = userInfo;
	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel}>
				<UserInfoContainer>
					<ProfilePicArea>
						<ImageBox width='220px' height='220px'>
							<img
								src={
									profilePicURL ||
									'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1697976551262_750.jpeg'
								}
								alt='프로필 이미지'
							/>
						</ImageBox>
					</ProfilePicArea>
					<UserInfoList>
						<NickNameArea>
							<span>{`${userNickName}`}</span> / <span>{`${gender}`}</span>
							<Badge>{`${NTRP}`}</Badge>
						</NickNameArea>
						<UserInfoItem>
							<ItemName>지역: </ItemName>
							<ItemContent>{`${userAddress}`}</ItemContent>
						</UserInfoItem>
						<UserInfoItem>
							<ItemName>승률: </ItemName>
							<ItemContent>
								{`${winningRate[0]}`}승 {`${winningRate[1]}`}패 {`${winningRate[2]}`}무
							</ItemContent>
						</UserInfoItem>
						<UserInfoItem>
							<ItemName>매너: </ItemName>
							<ItemContent>{`${mannerPoint}`} 점</ItemContent>
						</UserInfoItem>
					</UserInfoList>
				</UserInfoContainer>
			</ModalBox>
		</>
	);
}

const UserInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${rem('40px')};
`;

const ProfilePicArea = styled.div`
	max-width: ${rem('220px')};
	max-height: ${rem('220px')};
	border-radius: ${rem('20px')};
	overflow: hidden;
`;

const UserInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: ${rem('7px')} 0px;
`;

const UserInfoItem = styled.li`
	margin-bottom: ${rem('15px')};
	font-family: ${FontFamilySemiBold};
	font-size: ${rem(`${FontSizeLg}`)};
	color: ${BlackColor};
`;

const ItemName = styled.span`
	min-width: fit-content;
	font-family: inherit;
	font-size: ${rem(`${FontSizeMd}`)};
	color: ${PrimaryColor};
`;
const ItemContent = styled.span`
	min-width: fit-content;
	font-family: inherit;
	font-size: ${rem(`${FontSizeMd}`)};
	color: ${BlackColor};
`;

const NickNameArea = styled(UserInfoItem)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Badge = styled.div`
	display: inline-block;
	width: fit-content;
	height: ${rem('20px')};
	padding: 0px 5px;
	margin-left: 10px;	
	background-color: ${PrimaryColor};
	border-radius: ${rem('10px')};

	text-align: center;
	color: ${WhiteColor};
	font-size: ${rem(`${FontSizeMc}`)};
	line-height: ${rem('18px')};
	font-family ${FontFamilySemiBold};
`;
