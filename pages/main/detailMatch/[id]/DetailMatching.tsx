import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { ImageBox } from '../../../../styles/ts/components/box';
import { PrimaryColor } from '../../../../styles/ts/common';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { RoundButton } from '../../../../styles/ts/components/buttons';
import ModalBox from '../../../../components/common/modal';
import { prefix } from '../../../../constants/prefix';
import MatchesService from 'service/matches/service';
import useRouterHook from 'utils/useRouterHook';
import { formatDateTime } from 'utils/formatter';
import { ageGroupName, matchTypeName, ntrpName } from 'constants/userInfoOptions';
import {
	testItems,
	DetailMatchingContainer,
	ProfileContainer,
	ProfileBox,
	ImageWrap,
	ButtonBox,
	ProgressBarContainer,
	ContentContainer,
	DetailMatchItemBox,
	DetailMatchContent,
	FlexBox,
	MapBox,
	FloatBox,
	ModalAlignContainer,
	ModalWrapBox,
	ModalWrapItem,
} from '.';

export default function DetailMatching() {
	const { getPathName } = useRouterHook();
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);
	const [MatchingInfo, setMatchingInfo] = useState(null);
	// const [MatchingInfo, setMatchingInfo] = useState({
	// 	id: 1,
	// 	creatorUserId: 2,
	// 	title: '퇴근 후 같이 테니스 치실분!',
	// 	content: '초보자 환영합니다.',
	// 	location: '서울특별시 강남구 삼성동 삼성로 566 위드 테니스아카데미',
	// 	lat: 37.5121584863211,
	// 	lon: 127.054408208511,
	// 	locationImg: '',
	// 	date: '2023-11-30',
	// 	startTime: '20:00',
	// 	endTime: '22:00',
	// 	recruitDueDateTime: '2023-11-27T17:00',
	// 	recruitNum: 2,
	// 	cost: 50000,
	// 	isReserved: false,
	// 	ntrp: 'BEGINNER',
	// 	ageGroup: 'TWENTIES',
	// 	recruitStatus: 'OPEN',
	// 	matchingType: 'SINGLE',
	// 	confirmedNum: 1,
	// 	createTime: '2023-11-17T07:18:44',
	// });
	const [recruitList, setRecruitList] = useState({
		beforeList: [],
		afterList: [],
	});
	const matchId = getPathName().split('detailMatch/')[1].slice(1, 3);
	console.log(matchId);
	useEffect(() => {
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
		getNSsetMatchDetail(matchId);
		// getNSsetRecruitList();
	}, [matchId]);

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
							{MatchingInfo && formatDateTime(MatchingInfo.recruitDueDateTime).split('년')[1]}{' '}
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
							<p>{MatchingInfo && MatchingInfo.title}</p>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<FlexBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchAge'>연령대</label>
							<DetailMatchContent>
								<p>
									{MatchingInfo &&
										ageGroupName.filter((ele) => ele.value === MatchingInfo.ageGroup)[0].label}
								</p>
							</DetailMatchContent>
						</DetailMatchItemBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchNTRP'>NTRP</label>
							<DetailMatchContent>
								<p>
									{MatchingInfo &&
										ntrpName
											.filter((ele) => ele.value === MatchingInfo.ntrp)[0]
											.label.split(' (')[0]}
								</p>
							</DetailMatchContent>
						</DetailMatchItemBox>
					</FlexBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchItem'>매칭 항목</label>
						<DetailMatchContent>
							<p>
								{MatchingInfo &&
									matchTypeName.filter((ele) => ele.value === MatchingInfo.matchingType)[0]
										.label}{' '}
								/ {MatchingInfo && MatchingInfo.date} / {MatchingInfo && MatchingInfo.startTime} ~{' '}
								{MatchingInfo && MatchingInfo.endTime}
							</p>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>주소</label>
						<DetailMatchContent>
							<p>{MatchingInfo && MatchingInfo.location}</p>
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
							<img src={`${MatchingInfo && MatchingInfo.location}`} id='detailMatchInfo' />
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>본문 내용</label>
						<DetailMatchContent height={'300px'}>
							<p>{MatchingInfo && MatchingInfo.content}</p>
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
