import { RoundButton } from '../../../../styles/ts/components/buttons';
import { ImageBox } from '../../../../styles/ts/components/box';
import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontSizeSm } from '../../../../styles/ts/common';
import HalfDrawerBox from '../../../common/drawer/halfDrawer';
import FilteringModal from '../filteringModal';

export default function MatchingList() {
	const [isClickFilter, setIsClickFilter] = useState(false);

	const handleFilterDrawer = () => {
		setIsClickFilter((prev) => !prev);
	};
	return (
		<>
			<MatchingContainer>
				<ControlBox>
					<RoundButton colorstyle={'is-black'} width={'150px'} height={'40px'}>
						<ImageBox width={'20px'} height={'20px'}>
							<img src='/images/pencil.png' alt='pencil' />
						</ImageBox>
						<p>매칭등록</p>
					</RoundButton>
					<ImageBox onClick={handleFilterDrawer}>
						<img src='/images/filtering-menu.png' alt='filtering-menu' />
					</ImageBox>
				</ControlBox>

				{/* 핉터링 모달 */}
				<HalfDrawerBox
					isOpen={isClickFilter}
					placement={'bottom'}
					width={'50%'}
					height={'70%'}
					toggleDrawer={handleFilterDrawer}>
					<FilteringModal></FilteringModal>
				</HalfDrawerBox>
			</MatchingContainer>
		</>
	);
}

const MatchingContainer = styled.div``;

const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px 0;

	.buttons__RoundButton-sc-xhpq7c-0 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px ${rem('30px')};
		border-radius: 10px;

		p {
			font-family: Pretendard-Medium;
			font-size: ${rem(FontSizeSm)};
			margin-left: ${rem('6px')};
		}
	}
`;
