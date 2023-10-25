import styled from 'styled-components';
import {
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
} from '../../../styles/ts/common';
import { rem } from 'polished';

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;

	label {
		display: block;
		font-family: Pretendard;
		font-size: ${FontSizeSpSm};
		margin-bottom: 10px;
		color: ${InputLabelColor};
	}
	input {
		height: ${rem('50px')};
		border: 1px solid ${InputBorderColor};
		background: ${InputBoxColor};
		border-radius: 5px;
		margin-bottom: 20px;
	}
`;
