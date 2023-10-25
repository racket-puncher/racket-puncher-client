import styled from 'styled-components';
import { rem } from 'polished';
import * as common from '../../common';

interface IButtonProps {
	type: String;
}

export const RoundButton = styled.button<IButtonProps>`
	width: 100%;
	height: ${rem('60px')};
	font-family: Pretendard-Medium;
	font-size: ${rem(`${common.FontSizeSm}`)};
	color: ${common.WhiteColor};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;
	background-color: ${(props) => {
		switch (props.type) {
			case 'is-black':
				return common.BlackColor;
			case 'is-green':
				return common.PrimaryColor;
			case 'is-disabled':
				return common.DisabledColor;
			default:
				return common.BlackColor;
		}
	}};
`;
