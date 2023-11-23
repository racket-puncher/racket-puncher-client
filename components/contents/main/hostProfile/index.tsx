import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
	BlackColor,
	FontFamilyRegular,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeMd,
	FontSizeMdLg,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PlayerListBGColor,
	PrimaryColor,
} from 'styles/ts/common';
import { ImageBox } from 'styles/ts/components/box';
import { RoundButton } from 'styles/ts/components/buttons';
import UserInfoModal from 'components/common/playerCard/userInfoModal';

import usersService from 'service/users/service';

interface IHostProfile {
	hostId: string;
}

export default function HostProfile(props: IHostProfile) {
	const [writerInfo, setWriterInfo] = useState(null);

	useEffect(() => {
		const getNSsetWriter = async (id) => {
			try {
				const res = await usersService.getMyProfileInfo(id);
				const data = res.data.response;
				console.log(data);
				setWriterInfo({
					profileImg: data.profileImg,
					nickname: data.nickname,
					address: data.address,
					zipCode: data.zipCode,
					ntrp: data.ntrp,
					gender: data.gender,
					mannerScore: data.mannerScore,
					penaltyScore: data.penaltyScore,
					ageGroup: data.ageGroup,
				});
			} catch (err) {
				console.log(err);
			}
		};
		writerInfo === null && getNSsetWriter(props.hostId);
	}, []);

	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	const toggleUserInfoModal = () => setIsUserInfoModalOpen(!isUserInfoModalOpen);

	return (
		<>
			<UserInfoModal
				userId={props.hostId}
				isOpen={isUserInfoModalOpen}
				toggleModal={toggleUserInfoModal}
				onCancel={() => setIsUserInfoModalOpen(false)}
			/>

			<ProfileContainer>
				<ProfileBox>
					<ImageWrap>
						<ImageBox width={'140px'} height={'140px'}>
							{/* <img src={`${prefix}/images/profile-img.png`} alt='profile-image' /> */}

							{writerInfo && writerInfo.profileImg ? (
								<IMG
									src={
										writerInfo.profileImg ||
										'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1697976551262_750.jpeg'
									}
									alt='프로필 이미지'
								/>
							) : (
								<div style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}></div>
							)}
						</ImageBox>
						<p>{writerInfo && writerInfo.nickname}</p>
					</ImageWrap>
					<UserInfoModal
						userId={props.hostId}
						// userId={matchingInfo?.creatorUserId}
						isOpen={isUserInfoModalOpen}
						toggleModal={toggleUserInfoModal}
						onCancel={() => setIsUserInfoModalOpen(false)}
					/>
					<div>
						<RoundButton colorstyle={'is-green'} onClick={toggleUserInfoModal}>
							등록자 정보
						</RoundButton>
					</div>
				</ProfileBox>
			</ProfileContainer>
		</>
	);
}
const ProfileContainer = styled.div`
	margin-bottom: 30px;
`;
const ProfileBox = styled.div`
	height: 347px;
	padding: 40px ${rem('40px')};
	background-color: ${PlayerListBGColor};
	border-radius: 20px;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ImageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 13px;

	p {
		font-family: Pretendard-Medium;
		font-size: ${FontSizeLg};
		color: ${BlackColor};
	}
`;

const IMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
	border-radius: 20px;
`;
