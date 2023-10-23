import React, { ReactNode } from 'react';
import LoadingSpin from '../common/loading/spin';
import { loadingState } from '../../lib/store/common/index';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

interface ILayoutProps {
	children: ReactNode;
}

export default function LayoutContainer(props: ILayoutProps) {
	const isShow = useRecoilValue(loadingState);
	return (
		<>
			<LayoutWrapper>
				<div>{props.children}</div>
				{isShow && <LoadingSpin />}
			</LayoutWrapper>
		</>
	);
}

const LayoutWrapper = styled.div`
	min-height: 100vh;
	max-width: ${rem('640px')};
	margin: auto;
`;
