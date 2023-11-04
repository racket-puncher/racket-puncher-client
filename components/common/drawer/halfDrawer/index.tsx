import { ReactNode } from 'react';
import { Drawer as AntdDrawer, DrawerProps } from 'antd';
import { ImageBox } from '../../../../styles/ts/components/box';
import styled from 'styled-components';
import { BlackColor, FontSizeSpLg } from '../../../../styles/ts/common';
import { rem } from 'polished';
import { useForm } from 'react-hook-form';

interface IHalfDrawerProps {
	readonly title?: string;
	readonly isOpen: boolean;
	readonly children: ReactNode;
	readonly placement: DrawerProps['placement'];
	readonly height?: string;
	readonly width?: string;
	readonly toggleDrawer: () => void;
}
export default function HalfDrawerBox(props: IHalfDrawerProps) {
	const { reset: filterReset } = useForm();
	const handleClose = () => {
		props.toggleDrawer();
		filterReset();
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
			<CustomHalfDrawer
				title={CustomHeader()}
				maskClosable={false}
				placement={props.placement}
				open={props.isOpen}
				width={props.width}
				height={props.height}
				closable={false}
				key={props.placement}>
				{props.children}
			</CustomHalfDrawer>
		</>
	);
}

const CustomHalfDrawer = styled(AntdDrawer)`
	max-width: ${rem('640px')};
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 90% !important;
	margin: 0 auto;
	border-radius: 20px 20px 0 0;

	&.ant-drawer-content-wrapper {
	}
	div.ant-drawer-header {
		flex: none;
		height: ${rem('80px')};
		padding: 0 ${rem('30px')};
		border-bottom: 0;
	}
	div.ant-drawer-content-wrapper {
		border-radius: 30px;
	}
	div.ant-drawer-body {
		padding: 0 ${rem('30px')};
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
