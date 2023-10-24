import { Spin as AntdSpin } from 'antd';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { loadingState } from '../../../../lib/store/common';
import styled from 'styled-components';

interface ILayoutProps {
	children: ReactNode;
}

export default function LoadingSpin(props: ILayoutProps) {
	const isShow = useRecoilValue(loadingState);

	return (
		<>
			<CustomSpin spinning={isShow}>{props.children}</CustomSpin>
		</>
	);
}

const CustomSpin = styled(AntdSpin)`
	min-height: 100vh !important;
`;
