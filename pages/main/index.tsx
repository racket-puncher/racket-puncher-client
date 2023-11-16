import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';
import type { TabsProps } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import { GrayLine, ImageBox } from 'styles/ts/components/box';
import MatchingList from 'components/contents/main/matchingList';
import MyAroundMatching from 'components/contents/main/myAroundMatching';
import { CustomTab } from 'styles/ts/components/tab';
import MatchingCard from 'components/contents/main/card';
import useRouterHook from 'utils/useRouterHook';
import SkeletonUI from 'components/common/loading/skeleton';
import { prefix } from '../../constants/prefix';
import Service from '../../service/matches/service';

const settings = {
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const items: TabsProps['items'] = [
	{
		key: 'matchingList',
		label: '매칭리스트',
		children: <MatchingList />,
	},
	{
		key: 'myAroundMatching',
		label: '내 주변 매칭',
		children: <MyAroundMatching />,
	},
];

export default function MainPage() {
	const { movePage } = useRouterHook();
	const [isLoading, setIsLoading] = useState(true);
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

	return (
		<>
			<MainViewContainer>
				<SliderContainer>
					<Slider {...settings}>
						<ImageBox heightInit={true}>
							<img src={`${prefix}/images/main-slider-image.png`} alt='main-slider-img' />
						</ImageBox>
						<ImageBox heightInit={true}>
							<img src={`${prefix}/images/main-slider-image.png`} alt='main-slider-img' />
						</ImageBox>
					</Slider>
				</SliderContainer>

				<MainContainer>
					<CustomTab defaultActiveKey='1' items={items} />
					<GrayLine />
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
				</MainContainer>
			</MainViewContainer>
		</>
	);
}

const MainViewContainer = styled.div``;

const SliderContainer = styled.div`
	div.slick-slide {
		width: ${rem('640px')};
	}
`;

const MainContainer = styled.div`
	margin-top: 30px;
	padding: 0 ${rem('30px')};
`;
