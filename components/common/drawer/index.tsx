import { ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import type { DrawerProps } from 'antd';
import { Drawer as AntdDrawer } from 'antd';

import { ImageBox } from '../../../styles/ts/components/box';
import { BlackColor, FontSizeSpLg } from '../../../styles/ts/common';

interface IDrawerProps {
	readonly title?: string;
	readonly isOpen: boolean;
	readonly children: ReactNode;
	readonly placement: DrawerProps['placement'];
	readonly height?: string;
	readonly width?: string;
	readonly toggleDrawer: () => void;
}

export default function DrawerBox(props: IDrawerProps) {
	const handleClose = () => {
		props.toggleDrawer();
	};

	const CustomHeader = () => {
		return (
			<>
				<CustomHeaderBox>
					<div className='align-box'>
						{props.title && <p>{props.title}</p>}
						<ImageBox width={'34px'} height={'34px'} onClick={handleClose}>
							<img src='/images/close-icon.png' alt='close' />
						</ImageBox>
					</div>
				</CustomHeaderBox>
			</>
		);
	};

	return (
		<>
			<CustomDrawer
				title={CustomHeader()}
				maskClosable={false}
				placement={props.placement}
				open={props.isOpen}
				width={props.width}
				height={props.height}
				closable={false}
				key={props.placement}>
				{props.children}
			</CustomDrawer>
		</>
	);
}

const CustomDrawer = styled(AntdDrawer)`
	max-width: ${rem('640px')};
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	div.ant-drawer-header {
		flex: none;
		height: ${rem('80px')};
		padding: 0 ${rem('30px')};
	}

	div.ant-drawer-body {
		padding: ${rem('30px')};
	}
`;

const CustomHeaderBox = styled.div`
	div.align-box {
		position: relative;

		p {
			font-size: ${FontSizeSpLg};
			font-family: Pretendard-Medium;
			color: ${BlackColor};
			text-align: center;
		}

		div.box__ImageBox-sc-e7xchd-0 {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent !important;
		}
	}
`;
