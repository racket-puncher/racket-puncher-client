import styled from 'styled-components';
import React from 'react';
import { Radio } from 'antd';
import { rem } from 'polished';

import { FontSizeSpSm, PrimaryColor, ReportColor } from '../../../../styles/ts/common';

export default function FilteringModal() {
	return (
		<>
			<FilteringModalContainer>
				<Radio.Group defaultValue='register' size='large'>
					<Radio.Button value='register'>등록순</Radio.Button>
					<Radio.Button value='distance'>거리순</Radio.Button>
					<Radio.Button value='deadLine'>모집임박순</Radio.Button>
				</Radio.Group>
			</FilteringModalContainer>
		</>
	);
}

const FilteringModalContainer = styled.div`
	div.ant-radio-group {
		width: 100% !important;
		display: flex !important;

		label {
			display: block;
			width: 100%;
			text-align: center;
			padding-inline: initial;
			font-size: ${rem(FontSizeSpSm)};
			font-family: Pretendard-Regular;
			line-height: 1;
			height: inherit;
			padding: 10px ${rem('10px')};
			color: ${ReportColor};
			-webkit-tap-highlight-color: transparent !important;
			&.ant-radio-button-wrapper-checked {
				border-color: ${PrimaryColor};
				color: ${PrimaryColor};

				&::before {
					background-color: ${PrimaryColor};
				}
			}
		}
	}
`;
