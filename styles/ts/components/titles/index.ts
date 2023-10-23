import styled from 'styled-components';
import { rem } from 'polished';
import * as Common from '../../common';

export const PageMainTitle = styled.h1`
	font-family: ${Common.FontFamilyBold};
	font-size: ${rem(`${Common.FontSizeSpLg}`)};
	color: ${Common.BlackColor};
`;
