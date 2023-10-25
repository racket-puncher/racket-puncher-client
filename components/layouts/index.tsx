import React, { ReactNode } from 'react';
import LoadingSpin from '../common/loading/spin';
import styled from 'styled-components';
import { rem } from 'polished';

import Header from '../common/header/Header';

interface ILayoutProps {
	children: ReactNode;
}

export default function LayoutContainer(props: ILayoutProps) {
	return (
		<>
			<LoadingSpin>
				<LayoutWrapper>
					<Header />
					<LayoutAlign>{props.children}</LayoutAlign>
				</LayoutWrapper>
			</LoadingSpin>
		</>
	);
}

const LayoutWrapper = styled.div`
	min-height: 100vh;
	max-width: ${rem('640px')};
	margin: auto;
`;

const LayoutAlign = styled.div`
	min-height: 100vh;
	padding: 0 ${rem('30px')};
`;
