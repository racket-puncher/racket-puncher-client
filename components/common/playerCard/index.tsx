import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SquareButton } from 'styles/ts/components/buttons';
import { ImageBox } from 'styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	FontFamilySemiBold,
	FontSizeLg,
	LightGrayColor,
} from 'styles/ts/common';
import UserInfoModal from './userInfoModal';
import ReportUserModal from './reportUserModal';
import usersService from 'service/users/service';

interface IPlayerCardProps {
	userNickname: string;
	siteUserId: string;
}

export default function PlayerCard(props: IPlayerCardProps) {
	// To do
	// iphoneSE 최적화

	const { userNickname, siteUserId } = props;
	const { getUserInfo } = usersService;
	const [imgURL, setImgURL] = useState('');
	useEffect(() => {
		const getNSsetData = async () => {
			try {
				const res = await getUserInfo(siteUserId);
				const data = res.data.response.profileImg;
				console.log(data);
				setImgURL(data);
			} catch (err) {
				console.log(err);
			}
		};
		getNSsetData();
	}, []);

	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	const toggleUserInfoModal = () => setIsUserInfoModalOpen(!isUserInfoModalOpen);
	const [isReportUserModalOpen, setIsReportUserModalOpen] = useState(false);
	const toggleReportUserModal = () => setIsReportUserModalOpen(!isReportUserModalOpen);

	return (
		<>
			<PlayerCardContainer>
				<PlayerPicture>
					<ImageBox width='80px' height='80px'>
						<img src={imgURL || '-'} alt='프로필 이미지' />
					</ImageBox>
				</PlayerPicture>
				<PlayerName>{userNickname || '라켓왕자'}</PlayerName>
				<ButtonArea>
					<SquareButton
						width='80px'
						height='40px'
						colorstyle='is-black'
						onClick={() => setIsUserInfoModalOpen(true)}>
						정보
					</SquareButton>
					<SquareButton
						width='80px'
						height='40px'
						colorstyle='is-white'
						bordercolor='is-lightGray'
						onClick={() => setIsReportUserModalOpen(true)}>
						신고
					</SquareButton>
				</ButtonArea>
			</PlayerCardContainer>
			<UserInfoModal
				userId={siteUserId}
				isOpen={isUserInfoModalOpen}
				toggleModal={toggleUserInfoModal}
				onCancel={() => setIsUserInfoModalOpen(false)}
			/>
			<ReportUserModal
				reportedUserId={siteUserId}
				isOpen={isReportUserModalOpen}
				toggleModal={toggleReportUserModal}
				onCancel={() => setIsReportUserModalOpen(false)}
				onOk={() => setIsReportUserModalOpen(false)}
			/>
		</>
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
