import React, { ReactNode, useEffect, useState } from 'react';
import LoadingSpin from '../common/loading/spin';
import styled from 'styled-components';
import { rem } from 'polished';

import Header from './Header';
import { useRouter } from 'next/router';

interface ILayoutProps {
	readonly children: ReactNode;
}

interface ILayoutAlignProps {
	readonly isPadding: boolean;
}

export default function LayoutContainer(props: ILayoutProps) {
	const router = useRouter();
	const [isPadding, setIsPadding] = useState(true);

	useEffect(() => {
		if (router.pathname === '/') {
			console.log('진입!!');
			setIsPadding(false);
		} else {
			setIsPadding(true);
		}
	}, [router.pathname]);

	return (
		<>
			<LoadingSpin>
				<LayoutWrapper>
					<Header />
					<LayoutAlign isPadding={isPadding}>{props.children}</LayoutAlign>
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

const LayoutAlign = styled.div.withConfig({
	shouldForwardProp: (props) => props !== 'isPadding',
})<ILayoutAlignProps>`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: ${(props) => (props.isPadding ? `${rem('0px')} ${rem('30px')}` : 'initial')};
`;
