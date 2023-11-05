import styled from 'styled-components';
import { rem } from 'polished';
import { InputBorderColor, InputBoxColor, PrimaryColor } from '../../common';

export const TextArea = styled.textarea`
	height: ${rem('380px')};
	min-height: ${rem('200px')};
	max-height: ${rem('380px')};
	width: 100%;
	max-width: 100%;
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 0 15px;
	resize: none;

	&:focus {
		border: 1px solid ${PrimaryColor};
		outline: none;
	}
`;
