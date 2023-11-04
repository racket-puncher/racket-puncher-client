import styled, { css } from 'styled-components';
import React, { useEffect } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';

import { ImageBox } from '../../styles/ts/components/box';
import {
	BlackColor,
	FontSizeLg,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PlayerListBGColor,
	PrimaryColor,
} from '../../styles/ts/common';
import { RoundButton } from '../../styles/ts/components/buttons';

interface DetailMatchContentProps {
	height?: string;
}

export default function DetailMatching() {
	useEffect(() => {
		const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 3,
		};

		const map = new kakao.maps.Map(container, options);
	}, []);

	return (
		<>
			<DetailMatchingContainer>
				<ProfileContainer>
					<ProfileBox>
						<ImageWrap>
							<ImageBox width={'140px'} height={'140px'}>
								<img src='/images/profile-img.png' alt='profile-image' />
							</ImageBox>
							<p>고숭이</p>
						</ImageWrap>

						<ButtonBox>
							<RoundButton colorstyle={'is-green'}>등록자 정보</RoundButton>
						</ButtonBox>
					</ProfileBox>
				</ProfileContainer>

				<ControlBox>
					<ButtonBox>
						<RoundButton colorstyle={'is-black'} width={'128px'} height={'60px'}>
							목록
						</RoundButton>
					</ButtonBox>
					<ButtonBox>
						<RoundButton colorstyle={'is-black'} width={'128px'} height={'60px'}>
							삭제
						</RoundButton>
					</ButtonBox>
				</ControlBox>

				<ProgressBarContainer>
					<p>
						“모집 기간이 <span>2</span>일 <span>7</span>시간 남았습니다.“
					</p>
					<Progress
						strokeLinecap='round'
						percent={75}
						showInfo={false}
						strokeColor={PrimaryColor}
					/>
				</ProgressBarContainer>

				<ContentContainer>
					<DetailMatchItemBox>
						<label htmlFor='detailMatchTitle'>제목</label>
						<DetailMatchContent></DetailMatchContent>
					</DetailMatchItemBox>

					<FlexBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchAge'>연령대</label>
							<DetailMatchContent></DetailMatchContent>
						</DetailMatchItemBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchNTRP'>NTRP</label>
							<DetailMatchContent></DetailMatchContent>
						</DetailMatchItemBox>
					</FlexBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchItem'>매칭 항목</label>
						<DetailMatchContent></DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>주소</label>
						<DetailMatchContent></DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>길 찾기</label>
						<MapBox>
							<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
						</MapBox>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>구장 이미지</label>
						<DetailMatchContent height={'300px'}></DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>본문 내용</label>
						<DetailMatchContent height={'300px'}></DetailMatchContent>
					</DetailMatchItemBox>
				</ContentContainer>

				<ButtonBox>
					<RoundButton>모집 현황</RoundButton>
				</ButtonBox>
			</DetailMatchingContainer>
		</>
	);
}

const DetailMatchingContainer = styled.div`
	margin-top: 38px;
`;
const ProfileContainer = styled.div``;
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
const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0;
`;
const ProgressBarContainer = styled.div`
	p {
		font-family: Pretendard-Medium;
		color: ${InputLabelColor};
		font-size: ${FontSizeLg};
		text-align: center;
		margin-bottom: 20px;
		span {
			color: ${PrimaryColor};
		}
	}
`;
const ContentContainer = styled.div`
	margin-top: 20px;
`;
const MapBox = styled.div``;
const DetailMatchItemBox = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	label {
		display: block;
		font-family: Pretendard-Regular;
		font-size: ${FontSizeSpSm};
		margin-bottom: 10px;
		color: ${InputLabelColor};
	}
`;
const DetailMatchContent = styled.div<DetailMatchContentProps>`
	height: ${(props) => (props.height ? props.height : '50px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 0 15px;

	&:focus {
		border: 1px solid ${PrimaryColor};
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	div.detailMatch__DetailMatchItemBox-sc-1re6i36-8 {
		flex-basis: 280px;
		&:first-child {
			margin-right: ${rem('20px')};
		}
	}
`;
const ButtonBox = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;
