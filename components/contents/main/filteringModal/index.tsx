import styled from 'styled-components';
import React from 'react';
import { Radio, Select } from 'antd';
import type { SelectProps } from 'antd';
import { rem } from 'polished';

import {
	FontSizeMc,
	FontSizeSpSm,
	PrimaryColor,
	ReportColor,
	LightBlackColor,
	WhiteColor,
	BlackColor,
} from '../../../../styles/ts/common';
import { RoundButton } from '../../../../styles/ts/components/buttons';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
	options.push({
		value: i.toString(36) + i,
		label: i.toString(36) + i,
	});
}

export default function FilteringModal() {
	const handleChange = (value: string | string[]) => {
		console.log(`Selected: ${value}`);
	};

	return (
		<>
			<FilteringModalContainer>
				<div className={'content-box'}>
					{/* radio */}
					<Radio.Group defaultValue='register' size='large'>
						<Radio.Button value='register'>등록순</Radio.Button>
						<Radio.Button value='distance'>거리순</Radio.Button>
						<Radio.Button value='deadLine'>모집임박순</Radio.Button>
					</Radio.Group>

					<FilteringOptionContainer>
						{/* date-picker */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>날짜</SelectTitle>
							</LabelBox>
						</OptionWrap>

						{/* region */}
						<OptionWrap>
							<RegionBtnBox>
								<SelectTitle>지역</SelectTitle>
								<SelectRegionBtn>지역 선택</SelectRegionBtn>
							</RegionBtnBox>

							<Select
								mode='multiple'
								placeholder='지역을 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>

						{/* time-picker */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>시간</SelectTitle>
							</LabelBox>
						</OptionWrap>

						{/* matching type */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>경기 유형</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='경기 유형을 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>

						{/* age */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>모집 연령대</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='연령대를 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>

						{/* NTRP */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>모집 수준</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='모집 수준을 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>
					</FilteringOptionContainer>
				</div>

				<div className={'btn-box'}>
					<RoundButton>적용하기</RoundButton>
				</div>
			</FilteringModalContainer>
		</>
	);
}

const FilteringModalContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 20px;
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

const FilteringOptionContainer = styled.div`
	margin: 20px 0;
`;

const DatePickerBox = styled.div``;

const OptionWrap = styled.div`
	margin-bottom: 20px;
	div.ant-select-selector {
		padding: 10px 14px;
		border-radius: 10px;
		border: 1px solid #dcdcdc !important;
		background-color: #f9f9f9 !important;
		span.ant-select-selection-item {
			border-radius: 10px;
			background: #84a840;
			width: 68px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			span.ant-select-selection-item-content {
				color: #fff;
				font-size: 13px;
				font-family: Pretendard-Regular;
				margin-right: 5px;
			}
			span.ant-select-selection-item-remove {
				font-size: 13px;
				color: #fff;
			}
		}
	}
`;

const SelectTitle = styled.p`
	color: ${BlackColor};
	font-family: Pretendard-Regular;
	font-size: ${FontSizeSpSm};
`;

const LabelBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
const RegionBtnBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const SelectRegionBtn = styled.button`
	font-size: ${rem(FontSizeMc)};
	font-family: Pretendard-Regular;
	border: 1px solid ${LightBlackColor};
	background-color: ${WhiteColor};
	padding: 8px ${rem('15px')};
	border-radius: 10px;
	color: ${LightBlackColor};
	margin-left: ${rem('10px')};
`;
