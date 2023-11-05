import styled from 'styled-components';
import { rem } from 'polished';

import * as Common from '../../common';

export const PageMainTitle = styled.h1`
	text-align: center;
	font-family: ${Common.FontFamilyBold};
	font-size: ${rem(`${Common.FontSizeSpLg}`)};
	color: ${Common.BlackColor};
`;
