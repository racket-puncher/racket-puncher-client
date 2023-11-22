import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';
import { ImageBox } from '../../../styles/ts/components/box';
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
} from '../../../styles/ts/common';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { RoundButton } from '../../../styles/ts/components/buttons';
import ModalBox from '../../../components/common/modal';
import { prefix } from '../../../constants/prefix';
import MatchesService from 'service/matches/service';
import useCookies from 'utils/useCookies';
import useRouterHook from 'utils/useRouterHook';
import { formatDateTime } from 'utils/formatter';
import { ageGroupName, matchTypeName, ntrpName } from 'constants/userInfoOptions';

const testItems = [
	{ id: '0', title: '타이틀 1', index: 1 },
	{ id: '1', title: '타이틀 2', index: 2 },
	{ id: '2', title: '타이틀 3', index: 3 },
	{ id: '3', title: '타이틀 4', index: 4 },
	{ id: '4', title: '타이틀 5', index: 5 },
];

interface DetailMatchContentProps {
	height?: string;
}

export default function DetailMatching() {
	const { getPathName } = useRouterHook();
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);
	const [MatchingInfo, setMatchingInfo] = useState({
		id: 1,
		creatorUserId: 2,
		title: '퇴근 후 같이 테니스 치실분!',
		content: '초보자 환영합니다.',

		location: '서울특별시 강남구 삼성동 삼성로 566 위드 테니스아카데미',
		lat: 37.5121584863211,
		lon: 127.054408208511,
		locationImg: '',

		date: '2023-11-30',
		startTime: '20:00',
		endTime: '22:00',
		recruitDueDateTime: '2023-11-27T17:00',

		recruitNum: 2,
		cost: 50000,
		isReserved: false,

		ntrp: 'BEGINNER',
		ageGroup: 'TWENTIES',
		recruitStatus: 'OPEN',
		matchingType: 'SINGLE',
		confirmedNum: 1,
		createTime: '2023-11-17T07:18:44',
	});
	const [recruitList, setRecruitList] = useState({
		beforeList: [],
		afterList: [],
	});

	useEffect(() => {
		const matchId = getPathName().split('detailMatch/')[0].split('/')[0];
		const getNSsetMatchDetail = async (id) => {
			try {
				const res = await MatchesService.getDetailMatchingList(id);
				const data = res.data.response;
				console.log(data);
				setMatchingInfo(data);
			} catch (err) {
				console.log(err);
			}
		};
		const getNSsetWriter = async (id: string) => {
			try {
				const res = await MatchesService.getMatchingApplyState(id);
				const data = res.data.response;
				console.log(data);
				// setRecruitList(data);
			} catch (err) {
				console.log(err);
			}
		};
		const getNSsetRecruitList = async (id: string) => {
			try {
				const res = await MatchesService.getMatchingApplyState(id);
				const data = res.data.response;
				console.log(data);
				// setRecruitList(data);
			} catch (err) {
				console.log(err);
			}
		};
		// getNSsetRecruitList();
	}, []);

	const toggleModal = () => {
		setRecruitStatusModalVisible((prev) => !prev);
	};

	const closeRecruitStatusModal = () => {
		setRecruitStatusModalVisible(false);
	};

	const onDragEnd = ({ source, destination }) => {
		if (!destination) return;

		const scourceKey = source.droppableId;
		const destinationKey = destination.droppableId;

		const processArr = JSON.parse(JSON.stringify(recruitList));
		const [targetItem] = processArr[scourceKey].splice(source.index, 1);
		processArr[destinationKey].splice(destination.index, 0, targetItem);
		setRecruitList(processArr);
	};

	useEffect(() => {
		const exampleData = {
			beforeList: testItems,
			afterList: [],
		};
		setRecruitList(exampleData);
	}, []);

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

				<ProgressBarContainer>
					<p>
						{/* “모집 기간이 <span>2</span>일 <span>7</span>시간 남았습니다.“ */}
						<br />{' '}
						<span style={{ color: `${PrimaryColor}` }}>
							{formatDateTime(MatchingInfo.recruitDueDateTime).split('년')[1]}{' '}
						</span>
						모집 마감!
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
						<DetailMatchContent>
							<p>{MatchingInfo.title}</p>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<FlexBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchAge'>연령대</label>
							<DetailMatchContent>
								<p>{ageGroupName.filter((ele) => ele.value === MatchingInfo.ageGroup)[0].label}</p>
							</DetailMatchContent>
						</DetailMatchItemBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchNTRP'>NTRP</label>
							<DetailMatchContent>
								<p>
									{
										ntrpName
											.filter((ele) => ele.value === MatchingInfo.ntrp)[0]
											.label.split(' (')[0]
									}
								</p>
							</DetailMatchContent>
						</DetailMatchItemBox>
					</FlexBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchItem'>매칭 항목</label>
						<DetailMatchContent>
							<p>
								{matchTypeName.filter((ele) => ele.value === MatchingInfo.matchingType)[0].label} /{' '}
								{MatchingInfo.date} / {MatchingInfo.startTime} ~ {MatchingInfo.endTime}
							</p>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>주소</label>
						<DetailMatchContent>
							<p>{MatchingInfo.location}</p>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>길 찾기</label>
						<MapBox>
							<div id={'staticMap'} style={{ width: '100%', height: '400px' }}></div>
						</MapBox>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>구장 이미지</label>
						<DetailMatchContent height={'300px'}>
							<img src={`${MatchingInfo.location}`} id='detailMatchInfo' />
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>본문 내용</label>
						<DetailMatchContent height={'300px'}>
							<p>{MatchingInfo.content}</p>
						</DetailMatchContent>
					</DetailMatchItemBox>
				</ContentContainer>

				<FloatBox>
					<RoundButton onClick={() => setRecruitStatusModalVisible(true)}>모집 현황</RoundButton>
				</FloatBox>

				{/* 모집현황 modal --------------------------------- */}
				<ModalBox
					isOpen={recruitStatusModalVisible}
					heightType={true}
					toggleModal={toggleModal}
					onCancel={closeRecruitStatusModal}>
					<ModalAlignContainer>
						<div className='modalBoxes'>
							<DragDropContext onDragEnd={onDragEnd}>
								{Object.keys(recruitList).map((key) => (
									<ModalWrapBox key={key}>
										<div className='is-modal-wrap-header'>
											<p>신청인원</p>
											<p>10명</p>
										</div>
										<Droppable key={key} droppableId={key}>
											{(provided) => (
												<div
													className='is-modal-wrap-body'
													{...provided.droppableProps}
													ref={provided.innerRef}>
													{recruitList[key].map((item, index) => (
														<Draggable key={item.id} draggableId={item.id} index={index}>
															{(provided) => (
																<div
																	ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}>
																	<ModalWrapItem>
																		<div className='box-top'>
																			<ImageBox width='80px' height='80px'>
																				<img src='/images/main-img1.png' alt='image' />
																			</ImageBox>
																			<p>뿡뿡이 {item.index}</p>
																		</div>
																		<div className='box-footer'>
																			<div className='is-btn black'>정보</div>
																			<div className='is-btn gray'>신고</div>
																		</div>
																	</ModalWrapItem>
																</div>
															)}
														</Draggable>
													))}
												</div>
											)}
										</Droppable>
									</ModalWrapBox>
								))}
							</DragDropContext>
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
	width: 100%;
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
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: ${(props) => (props.height ? props.height : '50px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 0 15px;

	&:focus {
		border: 1px solid ${PrimaryColor};
	}

	p {
		font-family: ${FontFamilyRegular};
		font-size: ${FontSizeMd};
		color: ${BlackColor};
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: ${rem('20px')};

	div.detailMatch__DetailMatchItemBox-sc-iu375m-8 {
		width: 100%;
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
	height: ${rem('410px')};
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
