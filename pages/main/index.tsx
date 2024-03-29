import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';
import type { TabsProps } from 'antd';

import { GrayLine, ImageBox } from 'styles/ts/components/box';
import MatchingList from 'components/contents/main/matchingList';
import MyAroundMatching from 'components/contents/main/myAroundMatching';
import { CustomTab } from 'styles/ts/components/tab';
import useRouterHook from 'utils/useRouterHook';
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
