import styled from 'styled-components';
import { rem } from 'polished';

import * as common from '../../common';

interface IButtonProps {
	colorstyle?: string;
	height?: string;
}

export const RoundButton = styled.button<IButtonProps>`
	width: 100%;
	height: ${rem('60px')};
	font-family: Pretendard-Medium;
	font-size: ${rem(`${common.FontSizeSm}`)};
	color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-yellow':
				return common.KakaoFontColor;
			default:
				return common.WhiteColor;
		}
	}};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;
	background-color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.BlackColor;
			case 'is-green':
				return common.PrimaryColor;
			case 'is-disabled':
				return common.DisabledColor;
			case 'is-yellow':
				return common.KakaoBgColor;
			default:
				return common.BlackColor;
		}
	}};

	div.align-box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;
export const SquareButton = styled.button<IButtonProps>`
	width: 100%;
	height: ${(props) => rem(props.height || '60px')};
	font-family: Pretendard-Medium;
	font-size: ${rem(`${common.FontSizeSm}`)};
	color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.ReportColor;
			default:
				return common.WhiteColor;
		}
	}};
	border: 1px solid transparent;
	border-radius: 5px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;
	background-color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.BlackColor;
			case 'is-white':
				return common.WhiteColor;
			default:
				return common.BlackColor;
		}
	}};
`;
