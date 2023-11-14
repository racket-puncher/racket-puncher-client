import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';

import { ImageBox } from '../../../styles/ts/components/box';
import {
	BlackColor,
	FontSizeLg,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PlayerListBGColor,
	PrimaryColor,
} from '../../../styles/ts/common';
import { RoundButton } from '../../../styles/ts/components/buttons';
import ModalBox from '../../../components/common/modal';
import { prefix } from '../../../constants/prefix';

interface DetailMatchContentProps {
	height?: string;
}

export default function DetailMatching() {
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);

	const toggleModal = () => {
		setRecruitStatusModalVisible((prev) => !prev);
	};

	const closeRecruitStatusModal = () => {
		setRecruitStatusModalVisible(false);
	};

	useEffect(() => {
		const staticMapContainer = document.getElementById('staticMap');
		const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
		const marker = {
			position: markerPosition,
		};
		const staticMapOption = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 2,
			marker,
		};

		const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
	}, []);

	return (
		<>
			<DetailMatchingContainer>
				<ProfileContainer>
					<ProfileBox>
						<ImageWrap>
							<ImageBox width={'140px'} height={'140px'}>
								<img src={`${prefix}/images/profile-img.png`} alt='profile-image' />
							</ImageBox>
							<p>고숭이</p>
						</ImageWrap>

						<ButtonBox>
							<RoundButton colorstyle={'is-green'}>등록자 정보</RoundButton>
						</ButtonBox>
					</ProfileBox>
				</ProfileContainer>

				{/* <ControlBox> */}
				{/*	<ButtonBox> */}
				{/*		<RoundButton colorstyle={'is-black'} width={'128px'} height={'60px'}> */}
				{/*			목록 */}
				{/*		</RoundButton> */}
				{/*	</ButtonBox> */}
				{/*	<ButtonBox> */}
				{/*		<RoundButton colorstyle={'is-black'} width={'128px'} height={'60px'}> */}
				{/*			삭제 */}
				{/*		</RoundButton> */}
				{/*	</ButtonBox> */}
				{/* </ControlBox> */}

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
							<div id={'staticMap'} style={{ width: '100%', height: '400px' }}></div>
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

				<FloatBox>
					<RoundButton onClick={() => setRecruitStatusModalVisible(true)}>모집 현황</RoundButton>
				</FloatBox>

				{/* 모집현황 modal --------------------------------- */}
				<ModalBox
					isOpen={recruitStatusModalVisible}
					height={true}
					toggleModal={toggleModal}
					onCancel={closeRecruitStatusModal}>
					<ModalAlignContainer>
						<div className='modalBoxes'>
							<ModalWrapBox>
								<div className='is-modal-wrap-header'>
									<p>신청인원</p>
									<p>10명</p>
								</div>
								<div className='is-modal-wrap-body'>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
								</div>
							</ModalWrapBox>
							<ModalWrapBox>
								<div className='is-modal-wrap-header'>
									<p>참여인원</p>
									<p>2명</p>
								</div>
								<div className='is-modal-wrap-body'>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
									<ModalWrapItem>
										<div className='box-top'>
											<ImageBox width='80px' height='80px'>
												<img src='/images/main-img1.png' alt='image' />
											</ImageBox>
											<p>뿡뿡이</p>
										</div>
										<div className='box-footer'>
											<div className='is-btn black'>정보</div>
											<div className='is-btn gray'>신고</div>
										</div>
									</ModalWrapItem>
								</div>
							</ModalWrapBox>
						</div>
						<ButtonBox>
							<RoundButton colorstyle={'is-black'}>모집완료</RoundButton>
						</ButtonBox>
					</ModalAlignContainer>
				</ModalBox>
			</DetailMatchingContainer>
		</>
	);
}

const DetailMatchingContainer = styled.div`
	margin-top: 38px;
	padding-bottom: 100px;
`;
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
	div.detailMatch__DetailMatchItemBox-sc-iu375m-8 {
		flex-basis: 280px;
		&:first-child {
			margin-right: ${rem('20px')};
		}
	}
`;
const ButtonBox = styled.div``;

const FloatBox = styled.div`
	max-width: ${rem('640px')};
	width: 100%;
	padding: 0 30px;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 20px;
	z-index: 1000;
`;

// 모집현황 모달

const ModalWrapBox = styled.div`
	position: relative;
	width: 100%;
	height: ${rem('250px')};
	border-radius: 20px;
	background: #f9f9f9;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	overflow-y: scroll;
	margin-bottom: 20px;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	div.is-modal-wrap-header {
		position: sticky;
		top: 0px;
		max-width: ${rem('540px')};
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #84a840;
		border-radius: 20px 20px 0 0;
		padding: ${rem('16px')} ${rem('20px')};
		p {
			color: #fff;
			font-size: ${rem('17px')};
		}
	}
	div.is-modal-wrap-body {
		padding: 20px ${rem('20px')} 0;
	}
`;

const ModalWrapItem = styled.div`
	width: 100%;
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #fff;
	padding: ${rem('10px')};
	margin-bottom: 20px;
	cursor: pointer;
	div.box-top {
		display: flex;
		align-items: center;
		p {
			margin-left: ${rem('20px')};
			font-family: Pretendard-Medium;
			font-size: ${rem('20px')};
		}
	}
	div.box-footer {
		display: flex;
		align-items: center;
		margin-top: 10px;
		div.is-btn {
			width: 100%;
			text-align: center;
			border-radius: 5px;
			padding: 10px 0;
			&.black {
				background-color: black;
				color: #fff;
				margin-right: ${rem('10px')};
			}
			&.gray {
				border: 1px solid #dcdcdc;
				color: #999;
			}
		}
	}
`;

const ModalAlignContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
