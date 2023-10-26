import styled from 'styled-components';
import { rem } from 'polished';

import { FontSizeSpSm, InputErrorColor } from '../../common';

export const InputErrorText = styled.p`
	font-size: ${rem(FontSizeSpSm)};
	color: ${InputErrorColor};
	font-family: Pretendard-Regular;
`;
