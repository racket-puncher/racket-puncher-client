import styled from 'styled-components';
import { rem } from 'polished';
import { FontSizeSpSm, ReportColor, WhiteColor } from '../../common';

interface IBadgeProps {
	readonly padding?: string;
	readonly color?: string;
	readonly fontsize?: string;
}

export const CustomBadge = styled.span<IBadgeProps>`
	display: block;
	width: ${rem('73px')};
	height: ${rem('30px')};
	flex-shrink: 0;
	background-color: ${(props) => props.color || ReportColor};
	border-radius: 5px;
	color: ${WhiteColor};
	font-family: Pretendard-Regular;
	font-size: ${(props) => rem(props.fontsize || FontSizeSpSm)};
	display: flex;
	justify-content: center;
	align-items: center;
`;
