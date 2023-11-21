import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ModalBox from 'components/common/modal';
import { ImageBox } from 'styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	PrimaryColor,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeMd,
} from 'styles/ts/common';
import usersService from 'service/users/service';
import { ntrpName } from 'constants/userInfoOptions';

interface IUserInfoModalProps {
	readonly userId: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
}

// const userInfo = {
// 	registeredDate: '2023/05/15',
// 	userEmail: 'bboongbboong2@gmail.com',
// 	userName: '최연희',
// 	phoneNumber: '01000000000',
// 	userAddress: '서울 마포구',
// 	userNickName: '뿡뿡이',
// 	profilePicURL:
// 		'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
// 	ageGroup: '20대',
// 	gender: '여',
// 	NTRP: 'Beginner',
// 	winningRate: [5, 4, 1],
// 	mannerPoint: '90',
// };

export default function UserInfoModal(props: IUserInfoModalProps) {
	const { userId, isOpen, toggleModal, onCancel } = props;
	const { getUserInfo } = usersService;
	const [userInfo, setUserInfo] = useState({
		nickname: '',
		address: '',
		profileImg: '',
		gender: '',
		ntrp: '',
		winningRate: '',
		mannerPoint: 0,
		ageGroup: '',
	});

	useEffect(() => {
		const getNSsetData = async () => {
			try {
				const res = await getUserInfo(userId);
				const data = res.data.response;
				console.log(data);
				setUserInfo(data);
			} catch (err) {
				console.log(err);
			}
		};
		// getNSsetData();
	});
	const { nickname, address, profileImg, gender, ntrp, winningRate, mannerPoint, ageGroup } =
		userInfo;
	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel}>
				<UserInfoContainer>
					<ProfilePicArea>
						<ImageBox width='200px' height='200px'>
							<IMG
								src={
									profileImg ||
									'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1697976551262_750.jpeg'
								}
								alt='프로필 이미지'
							/>
						</ImageBox>
					</ProfilePicArea>
					<UserInfoList>
						<NickNameArea>
							<span>{nickname || '닉네임'}</span>
							<Badge>
								{ntrpName.filter((ele) => ele.value === ntrp)[0]?.label.split(' (')[0] || 'NTRP'}
							</Badge>
						</NickNameArea>
						<UserInfoItem>
							<ItemName>정보: </ItemName>
							<ItemContent>
								{ageGroup} / {gender}
							</ItemContent>
						</UserInfoItem>
						<UserInfoItem>
							<ItemName>지역: </ItemName>
							<ItemContent>{address}</ItemContent>
						</UserInfoItem>
						{/* <UserInfoItem>
							<ItemName>승률: </ItemName>
							<ItemContent>
								{winningRate[0] || '-'}승 {winningRate[1] || '-'}패 {winningRate[2] || '-'}무
							</ItemContent>
						</UserInfoItem> */}
						<UserInfoItem>
							<ItemName>매너: </ItemName>
							<ItemContent>
								<ImageBox width='15px' height='15px'>
									<img src='/images/tennis-ball.png' alt='테니스공' />
								</ImageBox>
							</ItemContent>
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
	justify-content: space-between;
	align-items: center;
`;

const ProfilePicArea = styled.div`
	max-width: ${rem('220px')};
	max-height: ${rem('220px')};
	border-radius: ${rem('20px')};
	overflow: hidden;
`;

const IMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
`;

const UserInfoList = styled.ul`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: ${rem('15px')};
	max-width: 50%;
	min-width: fit-content;
	padding: ${rem('15px')};
`;

const UserInfoItem = styled.li`
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
	div {
		display: inline-block;
		transform: translateY(${rem('2px')});
	}
`;

const NickNameArea = styled(UserInfoItem)`
	display: flex;
	flex-direction: row;
	align-items: center;
	&::first-child {
		margin-right: 5px;
	}
`;

// const Badge = styled.div`
// 	display: inline-block;
// 	width: fit-content;
// 	height: ${rem('25px')};
// 	padding: 0px 5px;
// 	margin-left: 10px;
// 	background-color: ${PrimaryColor};
// 	border-radius: ${rem('10px')};

// 	text-align: center;
// 	color: ${WhiteColor};
// 	font-size: ${rem(`${FontSizeMc}`)};
// 	line-height: ${rem('18px')};
// 	font-family ${FontFamilySemiBold};
// `;

const Badge = styled.div`
	display: inline-block;
	min-width: ${rem('40px')};
	height: ${rem('30px')};
	padding: 0px ${rem('7px')};
	background-color: ${PrimaryColor};
	border-radius: ${rem('15px')};

	text-align: center;
	color: ${WhiteColor};
	font-size: ${rem('15px')};
	line-height: ${rem('29px')};
	font-family: ${FontFamilySemiBold};
`;
