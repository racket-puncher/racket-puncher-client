import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import InfiniteScroll from 'react-infinite-scroller';

import { RoundButton } from '../../../../styles/ts/components/buttons';
import { ImageBox } from '../../../../styles/ts/components/box';
import { FontSizeSm } from '../../../../styles/ts/common';
import HalfDrawerBox from '../../../common/drawer/halfDrawer';
import FilteringModal from '../filteringModal';
import { prefix } from '../../../../constants/prefix';
import useRouterHook from 'utils/useRouterHook';
import MatchingCard from 'components/contents/main/card';
import SkeletonUI from 'components/common/loading/skeleton';
import Service from '../../../../service/matches/service';

export default function MatchingList() {
	const { movePage } = useRouterHook();
	const [isClickFilter, setIsClickFilter] = useState(false);
	const [matchingList, setMatchingList] = useState([]);
	const [params, setParams] = useState({
		page: 1,
		size: 10,
	});

	const getMatchingList = async () => {
		try {
			const res = await Service.getMatchingList(params);
			setParams((prev) => ({ ...prev, page: prev.page + 1 }));
			setMatchingList((prev) => [...prev, ...res.data.content]);
		} catch (e) {
			console.log(e);
		}
	};

	const moveDetailMatching = () => {
		movePage('/main/detailMatch');
	};

	const handleFilterDrawer = () => {
		setIsClickFilter((prev) => !prev);
	};
	const handleClickPostMatching = () => {
		movePage('/post-matching');
	};
	return (
		<>
			<MatchingContainer>
				<ControlBox>
					<RoundButton
						colorstyle={'is-black'}
						width={'150px'}
						height={'40px'}
						onClick={handleClickPostMatching}>
						<ImageBox width={'20px'} height={'20px'}>
							<img src={`${prefix}/images/pencil.png`} alt='pencil' />
						</ImageBox>
						<p>매칭등록</p>
					</RoundButton>
					<ImageBox onClick={handleFilterDrawer}>
						<img src={`${prefix}/images/filtering-menu.png`} alt='filtering-menu' />
					</ImageBox>
				</ControlBox>

				<InfiniteScroll
					pageStart={0}
					loadMore={getMatchingList}
					hasMore={true || false}
					loader={
						<div className='loader' key={0}>
							<SkeletonUI />
						</div>
					}>
					{matchingList.map((item) => {
						return (
							<>
								<MatchingCard
									matchingStartDateTime={item.matchingStartDateTime}
									matchingType={item.matchingType}
									ntrp={item.ntrp}
									reserved={item.reserved}
									title={item.title}
									onClick={moveDetailMatching}
								/>
							</>
						);
					})}
				</InfiniteScroll>

				{/* 핉터링 모달 */}
				<HalfDrawerBox
					isOpen={isClickFilter}
					placement={'bottom'}
					width={'50%'}
					height={'90%'}
					toggleDrawer={handleFilterDrawer}>
					<FilteringModal clickFilter={isClickFilter} toggleModal={handleFilterDrawer} />
				</HalfDrawerBox>
			</MatchingContainer>
		</>
	);
}

const MatchingContainer = styled.div``;

const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px 0;

	.buttons__RoundButton-sc-xhpq7c-0 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px ${rem('30px')};
		border-radius: 10px;

		p {
			font-family: Pretendard-Medium;
			font-size: ${rem(FontSizeSm)};
			margin-left: ${rem('6px')};
		}
	}
`;
