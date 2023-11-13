import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
} from '../../common';

export const TextArea = styled.textarea`
	resize: none !important;

	min-width: 100%;
	min-height: ${rem('140px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 10px;
	font-family: ${FontFamilyRegular};
	font-size: ${FontSizeSpSm};

	&:focus {
		border: 1px solid ${PrimaryColor};
		outline: none;
	}
`;
