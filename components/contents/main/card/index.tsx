import styled from 'styled-components';
import { GrayLine, ImageBox } from '../../../../styles/ts/components/box';
import { CustomBadge } from '../../../../styles/ts/components/badge';
import React from 'react';
import { rem } from 'polished';
import { formatDateTime } from 'utils/formatter';

import {
	FontSizeLg,
	FontSizeMc,
	InputLabelColor,
	PrimaryColor,
	ReportColor,
	YellowBgColor,
} from '../../../../styles/ts/common';
import { prefix } from '../../../../constants/prefix';
import useCookies from 'utils/useCookies';

interface IMatchingCardProps {
	readonly matchingStartDateTime?: string;
	readonly matchingType?: string;
	readonly ntrp?: string;
	readonly reserved?: boolean;
	readonly title?: string;
	readonly idString?: string;
	readonly onClick?: () => void;
}

export default function MatchingCard(props: IMatchingCardProps) {
	const { setCookie } = useCookies();
	return (
		<>
			<CardContainer onClick={props.onClick}>
				<ContentBox>
					<LeftBox>
						<ImageBox width={'128.205px'} height={'125px'}>
							<img src={`${prefix}/images/main-img1.png`} alt='main-image1' />
						</ImageBox>
					</LeftBox>

					<RightBox>
						<BadgeBox>
							<CustomBadge
								color={props.reserved ? YellowBgColor : ReportColor}
								fontsize={FontSizeMc}>
								{props.reserved ? '예약완료' : '예약X'}
							</CustomBadge>
							<CustomBadge color={'#4682A9'} fontsize={FontSizeMc}>
								남자 단식
							</CustomBadge>
							<CustomBadge color={PrimaryColor} fontsize={FontSizeMc}>
								{props.ntrp}
							</CustomBadge>
						</BadgeBox>

						<MatchingTimeBox>
							{/* <p>10월 10일(월) 오후 2시</p> */}
							<p>{formatDateTime(props.matchingStartDateTime)}</p>
						</MatchingTimeBox>

						<MatchingTitleBox>
							<p>{props.title}</p>
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
