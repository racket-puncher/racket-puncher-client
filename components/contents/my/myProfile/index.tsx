import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImageBox } from 'styles/ts/components/box';
import {
	FontSizeMd,
	FontSizeSpSm,
	FontFamilySemiBold,
	FontFamilyRegular,
	PrimaryColor,
	BlackColor,
	WhiteColor,
	ReportColor,
} from 'styles/ts/common';
import usersService from 'service/users/service';
// import AuthService from 'service/auth/service';
import useCookies from 'utils/useCookies';
import { ageGroupName, ntrpName } from 'constants/userInfoOptions';

// const userInfoALT = {
// 	userNickName: '왕자',
// 	age: 30,
// 	gender: '남',
// 	userAddress: '서울시 성동구',
// 	ntrp: 'Pro',
// 	winningRate: [1, 3],
// 	mannerPoint: 85,
// 	realName: '김개발',
// 	email: 'princeofracket@gmail.com',
// 	imageURL: 'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
// };

export default function MyProfile() {
	const { getCookie } = useCookies();
	// const { getNewToken } = AuthService;
	const { getMyProfileInfo } = usersService;
	const [userInfo, setUserInfo] = useState({
		userName: '',
		userNickname: '',
		ageGroup: '',
		gender: '',
		ntrp: '',
		userAddress: '',
		mannerPoint: 0,
		userEmail: '',
		imageURL: '',
	});
	const {
		userName,
		userNickname,
		ageGroup,
		gender,
		ntrp,
		userAddress,
		mannerPoint,
		userEmail,
		imageURL,
	} = userInfo;
	useEffect(() => {
		const getNSsetData = async (id: string) => {
			try {
				const res = await getMyProfileInfo(id);
				const data = res.data.response;
				console.log(data);
				setUserInfo({
					...userInfo,
					userName: data.siteusername,
					userNickname: data.nickname,
					ageGroup: ageGroupName.filter((ele) => ele.value === data.ageGroup)[0].label,
					gender: data.gender === 'MALE' ? '남' : '여',
					ntrp: ntrpName.filter((ele) => ele.value === data.ntrp)[0].label.split(' ')[0],
					userAddress: data.address,
					mannerPoint: parseInt(data.mannerScore) - parseInt(data.penaltyScore),
					userEmail: data.email,
					imageURL: data.profileImg,
				});
			} catch (err) {
				console.log(err);
			}
		};
		getCookie('id') && getNSsetData(getCookie('id'));
	}, []);

	return (
		<MyProfileContainer>
			<ProfileImage width='280px' height='280px'>
				<img
					src={
						imageURL === 'test.url'
							? 'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg'
							: imageURL
					}
					alt='프로필 사진'
				/>
			</ProfileImage>
			<Table>
				<thead>
					<tr>
						<th colSpan={2}>
							<TitleArea>
								<Title>{userNickname || '-'}</Title> <Badge> {ntrp || '-'} </Badge>
							</TitleArea>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Cell>
								<ItemName>사용자 : </ItemName>
								<ItemContent>{userName || '-'}</ItemContent>
							</Cell>
						</td>
						<td>
							<CellRight>
								<ItemName>매너 : </ItemName>
								<ItemContent>
									<ImageBox width='20px' height='20px'>
										<img src='/images/tennis-ball.png' alt='테니스공' />
									</ImageBox>
								</ItemContent>
							</CellRight>
						</td>
					</tr>
					<tr>
						<td>
							<Cell>
								<ItemName>정보 : </ItemName>
								<ItemContent>
									{gender || '-'} / {ageGroup || '-'}
								</ItemContent>
							</Cell>
						</td>
						<td>
							<CellRight>
								<ItemName>승률 : </ItemName>
								<ItemContent>-</ItemContent>
							</CellRight>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<Cell>
								<ItemName>이메일 : </ItemName>
								<ItemContent>{userEmail || '-'}</ItemContent>
							</Cell>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<CellBottom>
								<ItemName>주소 : </ItemName>
								<ItemContent>
									{userAddress.includes('(') ? userAddress.split('(')[0] : userAddress}
								</ItemContent>
							</CellBottom>
						</td>
					</tr>
				</tbody>
			</Table>
		</MyProfileContainer>
	);
}

const MyProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: ${rem('30px')};
	width: 100%;
	margin: ${rem('30px')} 0px;
`;
const ProfileImage = styled(ImageBox)`
	border-radius: ${rem('20px')};
	max-width: ${rem('150px')};
	max-height: ${rem('150px')};
	overflow: hidden;
`;
const Table = styled.table`
	min-width: 100%;
`;

const TitleArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: ${rem('56px')};
	max-height: ${rem('56px')};
	padding: ${rem('10px')} ${rem('20px')};
	border: 1px solid ${ReportColor};
	border-radius: 20px 20px 0px 0px;
`;

const Title = styled.div`
	line-height: ${rem('30px')};
	font-size: ${FontSizeMd};
	font-family: Pretendard-SemiBold;
`;

const Cell = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	gap: ${rem('10px')};
	height: ${rem('56px')};
	max-height: ${rem('56px')};
	padding: ${rem('10px')} ${rem('20px')};
	border: 1px solid ${ReportColor};
	border-top: none;
	font-size: ${FontSizeMd};
`;

const CellRight = styled(Cell)`
	border-left: none;
`;
const CellBottom = styled(Cell)`
	border-radius: 0px 0px 20px 20px;
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
