import React, { ReactNode } from 'react';
import { loadingState } from '../../lib/store/common/index';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';
import SkeletonUI from '../common/loading/skeleton';

interface ILayoutProps {
	children: ReactNode;
}

export default function LayoutContainer(props: ILayoutProps) {
	const isShow = useRecoilValue(loadingState);
	return (
		<>
			<LayoutWrapper>
				<LayoutAlign>
					<div>{props.children}</div>
				</LayoutAlign>
				{isShow && <SkeletonUI />}
			</LayoutWrapper>
		</>
	);
}

const LayoutWrapper = styled.div`
	min-height: 100vh;
	max-width: ${rem('640px')};
	margin: auto;
`;

const LayoutAlign = styled.div`
	padding: 0 ${rem('30px')};
`;
