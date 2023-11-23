import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';
import { ImageBox } from 'styles/ts/components/box';
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
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import UserInfoModal from 'components/common/playerCard/userInfoModal';

import { RoundButton } from 'styles/ts/components/buttons';
import ModalBox from 'components/common/modal';
import { prefix } from 'constants/prefix';
import MatchesService from 'service/matches/service';
import useCookies from 'utils/useCookies';
import useRouterHook from 'utils/useRouterHook';
import { formatDateTime } from 'utils/formatter';
import { ageGroupName, matchTypeName, ntrpName } from 'constants/userInfoOptions';
import usersService from 'service/users/service';

const testItems = [
	{ id: '0', title: '타이틀 1', index: 1 },
	{ id: '1', title: '타이틀 2', index: 2 },
	{ id: '2', title: '타이틀 3', index: 3 },
	{ id: '3', title: '타이틀 4', index: 4 },
	{ id: '4', title: '타이틀 5', index: 5 },
];

interface IDNDModalProps {
	height?: string;
}

export default function DNDModal(props: IDNDModalProps) {
	const { getQueryPathName, movePage } = useRouterHook();
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);
	const [matchingInfo, setMatchingInfo] = useState(undefined);
	const [writerId, setWriterId] = useState('');
	const [writerInfo, setWriterInfo] = useState(undefined);
	const [applyList, setApplyList] = useState({});
	const [recruitList, setRecruitList] = useState({
		beforeList: [],
		afterList: [],
	});
	const matchId = getQueryPathName().id;
	// const matchId = getQueryPathName().split('detailMatch/')[1].slice(1, 3);
	console.log(matchId);
	useEffect(() => {
		if (!matchingInfo) {
			const getNSsetMatchDetail = async (id) => {
				try {
					const res = await MatchesService.getDetailMatchingList(id);
					const data = res.data.response;
					console.log(data);
					setMatchingInfo(data);
					setWriterId(data.creatorUserId);
				} catch (err) {
					console.log(err);
				}
			};
			const getNSsetWriter = async (id) => {
				try {
					const res = await usersService.getMyProfileInfo(id);
					const data = res.data.response;
					console.log(data);
					setWriterInfo(data);
				} catch (err) {
					console.log(err);
				}
			};
			getNSsetWriter(matchingInfo?.creatorUserId);
			getNSsetMatchDetail(matchId);
		}
		// getNSsetRecruitList();
	}, [matchId, writerId]);

	// 모달
	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	const toggleUserInfoModal = () => setIsUserInfoModalOpen(!isUserInfoModalOpen);

	const toggleModal = () => setRecruitStatusModalVisible((prev) => !prev);

	const closeRecruitStatusModal = () => setRecruitStatusModalVisible(false);

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
		const getNSsetApplyList = async (id) => {
			try {
				const res = await MatchesService.getMatchingApplyState(id);
				const data = res.data.response;
				console.log(data);
				setApplyList(data);
			} catch (err) {
				console.log(err);
			}
		};
		getNSsetApplyList(matchId);
	}, []);

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
	display: flex;
	flex-direction: row;
	gap: ${rem('15px')};
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
const IMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
	border-radius: 20px;
`;
