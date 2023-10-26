import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';
import { InputBorderColor, InputBoxColor, PrimaryColor } from '../../common';
import { rem } from 'polished';

export const CustomSelect = styled(AntdSelect)`
	height: ${rem('50px')};
	margin-bottom: 20px;

	.ant-select-selector {
		border: 1px solid ${InputBorderColor} !important;
		background: ${InputBoxColor} !important;
		border-radius: 5px !important;
		padding: 0 15px !important;
	}
	&.ant-select-focused {
		div.ant-select-selector {
			border: 1px solid ${PrimaryColor} !important;
			outline: none !important;
			box-shadow: none !important;
		}
	}
`;
