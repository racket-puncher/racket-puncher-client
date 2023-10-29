import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem } from 'polished';

import { ImageBox } from '../styles/ts/components/box';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	// autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function MainPage() {
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

				<div className='matchList'></div>
			</MainViewContainer>
		</>
	);
}

const MainViewContainer = styled.div`
	margin-top: 20px;
`;

const SliderContainer = styled.div`
	div.slick-slide {
		width: ${rem('640px')};
	}
`;
