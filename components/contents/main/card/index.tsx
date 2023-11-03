import styled from 'styled-components';
import { GrayLine, ImageBox } from '../../../../styles/ts/components/box';
import { CustomBadge } from '../../../../styles/ts/components/badge';
import React from 'react';
import { rem } from 'polished';
import {
	FontSizeLg,
	FontSizeMc,
	InputBoxColor,
	InputLabelColor,
	PrimaryColor,
	ReportColor,
} from '../../../../styles/ts/common';

export default function MatchingCard({ onClick }) {
	return (
		<>
			<CardContainer onClick={onClick}>
				<ContentBox>
					<LeftBox>
						<ImageBox width={'128.205px'} height={'125px'}>
							<img src='/images/main-img1.png' alt='main-image1' />
						</ImageBox>
					</LeftBox>

					<RightBox>
						<BadgeBox>
							<CustomBadge color={ReportColor} fontsize={FontSizeMc}>
								예약X
							</CustomBadge>
							<CustomBadge color={'#4682A9'} fontsize={FontSizeMc}>
								남자 단식
							</CustomBadge>
							<CustomBadge color={PrimaryColor} fontsize={FontSizeMc}>
								NTRP 2.0
							</CustomBadge>
						</BadgeBox>

						<MatchingTimeBox>
							<p>10월 10일(월) 오후 2시</p>
						</MatchingTimeBox>

						<MatchingTitleBox>
							<p>양천구 목동 테니스 경기장</p>
						</MatchingTitleBox>
					</RightBox>
				</ContentBox>
			</CardContainer>
			<GrayLine />
		</>
	);
}

const CardContainer = styled.div`
	padding: 20px 0;
`;
const ContentBox = styled.div`
	display: flex;
	align-items: center;
`;
const LeftBox = styled.div`
	flex-basis: 128.205px;
	margin-right: ${rem('20px')};
`;
const RightBox = styled.div``;
const BadgeBox = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-bottom: 10px;
`;
const MatchingTimeBox = styled.div`
	margin-bottom: 10px;
	p {
		font-family: Pretendard-Regular;
		font-size: ${FontSizeMc};
		color: ${InputLabelColor};
	}
`;
const MatchingTitleBox = styled.div`
	p {
		font-family: Pretendard-Regular;
		font-size: ${FontSizeLg};
		color: ${InputLabelColor};
	}
`;
