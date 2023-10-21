import React, { ReactNode } from 'react';
import LoadingSpin from '../common/loading/spin';
import { loadingState } from '../../lib/store/common/index';
import { useRecoilValue } from 'recoil';

interface ILayoutProps {
	children: ReactNode;
}

export default function LayoutContainer(props: ILayoutProps) {
	const isShow = useRecoilValue(loadingState);
	return (
		<>
			<div>{props.children}</div>
			{isShow && <LoadingSpin />}
		</>
	);
}
