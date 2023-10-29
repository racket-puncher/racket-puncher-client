import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';
import type { RadioChangeEvent, TabsProps } from 'antd';
import { Tabs } from 'antd';

import { ImageBox } from '../styles/ts/components/box';

const settings = {
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	// autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function MainPage() {
	const items: TabsProps['items'] = [
		{
			key: 'matchingList',
			label: '매칭리스트',
			children: '매칭리스트입니다',
		},
		{
			key: 'myAroundMatching',
			label: '내 주변 매칭',
			children: '내 주변 매칭입니다',
		},
	];

	return (
		<>
			<MainViewContainer>
				<SliderContainer>
					<Slider {...settings}>
						<ImageBox height={'300px'}>
							<img src='/images/main-slider-image.png' alt='main-slider-img' />
						</ImageBox>
						<ImageBox>
							<img src='/images/main-slider-image.png' alt='main-slider-img' />
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

const CustomTab = styled(Tabs)`
	width: 100% !important;
	font-size: inherit !important;
	line-height: 1 !important;
	color: inherit !important;
	div.ant-tabs-nav {
		margin: 0 !important;
		&::before {
			display: none !important;
		}
		div.ant-tabs-nav-wrap {
			display: block !important;
			&::before {
				display: none !important;
			}
			&::after {
				display: none !important;
			}
			div.ant-tabs-nav-list {
				display: block !important;
				div.ant-tabs-tab {
					display: block !important;
					padding: 0 !important;
					font-size: inherit !important;
					margin: 0 !important;
				}
				div.ant-tabs-ink-bar {
					display: none !important;
				}
			}
		}
		div.ant-tabs-nav-operations {
			display: none !important;
		}
	}
`;
