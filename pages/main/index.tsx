import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';
import type { TabsProps } from 'antd';

import { GrayLine, ImageBox } from 'styles/ts/components/box';
import MatchingList from 'components/contents/main/matchingList';
import MyAroundMatching from 'components/contents/main/myAroundMatching';
import { CustomTab } from 'styles/ts/components/tab';
import MatchingCard from 'components/contents/main/card';
import useRouterHook from 'utils/useRouterHook';
import SkeletonUI from 'components/common/loading/skeleton';

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
	const test = [
		{
			id: '1',
		},
		{
			id: '2',
		},
		{
			id: '3',
		},
		{
			id: '4',
		},
	];

	const moveDetailMatching = () => {
		movePage('/main/detailMatch');
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 200);
	}, []);

	return (
		<>
			<MainViewContainer>
				<SliderContainer>
					<Slider {...settings}>
						<ImageBox heightInit={true}>
							<img src='/images/main-slider-image.png' alt='main-slider-img' />
						</ImageBox>
						<ImageBox heightInit={true}>
							<img src='/images/main-slider-image.png' alt='main-slider-img' />
						</ImageBox>
					</Slider>
				</SliderContainer>

				<MainContainer>
					<CustomTab defaultActiveKey='1' items={items} />
					<GrayLine />
					{test.map((item) => {
						return (
							<>
								{isLoading ? (
									<SkeletonUI />
								) : (
									<MatchingCard onClick={moveDetailMatching}></MatchingCard>
								)}
							</>
						);
					})}
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
