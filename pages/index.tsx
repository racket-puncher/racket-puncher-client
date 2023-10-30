import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';
import type { TabsProps } from 'antd';
import { Tabs as AntdTabs } from 'antd';

import { ImageBox } from '../styles/ts/components/box';
import { RoundButton } from '../styles/ts/components/buttons';
import { FontSizeSm } from '../styles/ts/common';

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

					<ControlBox>
						<RoundButton colorstyle={'is-black'} width={'150px'}>
							<ImageBox width={'20px'} height={'20px'}>
								<img src='/images/pencil.png' alt='pencil' />
							</ImageBox>
							<p>매칭등록</p>
						</RoundButton>
						<ImageBox>
							<img src='/images/filtering-menu.png' alt='filtering-menu' />
						</ImageBox>
					</ControlBox>
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

const CustomTab = styled(AntdTabs)`
	width: 100% !important;
	font-size: inherit !important;
	line-height: 1 !important;
	color: inherit !important;
	div.ant-tabs-nav {
		margin: 0 !important;
		background-color: #f5f5f5 !important;
		padding: ${rem('10px')} ${rem('20px')} !important;
		border-radius: 50px !important;
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
				display: flex !important;
				div.ant-tabs-tab {
					width: 260px; !important;
					display: block !important;
					padding: 11px 0 !important;
					font-size: inherit !important;
					margin: 0 !important;
					text-align: center !important;
					font-size: 18px; !important;
					font-family: Pretendard-Regular;
					color: #999;
					&.ant-tabs-tab-active {
						width: 260px;
						text-align: center;
						background: #ffff;
						padding: 11px 0;
						border-radius: 50px;
						border: 1px solid #84a840;
						color: #84a840!important;
						.ant-tabs-tab-btn {
							color: #84a840;
						}
					}
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

const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
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
