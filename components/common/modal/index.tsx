import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal as AntdModal } from 'antd';
import { ImageBox } from '../../../styles/ts/components/box';
import { BlackColor, FontSizeSpLg } from '../../../styles/ts/common';

interface IModalProps {
	readonly title?: string;
	readonly children: ReactNode;
	readonly isOpen: boolean;
	readonly footerButtons?: ReactElement[];
	readonly toggleModal: () => void;
	readonly onOk: () => void;
	readonly onCancel: () => void;
}

export default function ModalBox(props: IModalProps) {
	const handleOk = () => {
		props.toggleModal();
		props.onOk();
	};

	const handleCancel = () => {
		props.toggleModal();
		props.onCancel();
	};

	const CustomHeader = () => {
		return (
			<>
				<CustomHeaderBox>
					<div className='align-box'>
						{props.title && <p>{props.title}</p>}
						<ImageBox width={'34px'} height={'34px'} onClick={handleCancel}>
							<img src='/images/close-icon.png' alt='close' />
						</ImageBox>
					</div>
				</CustomHeaderBox>
			</>
		);
	};

	return (
		<>
			<CustomModal
				closeIcon={false}
				title={CustomHeader()}
				open={props.isOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered={true}
				maskClosable={false}
				footer={props.footerButtons || []}>
				{props.children}
			</CustomModal>
		</>
	);
}

const CustomModal = styled(AntdModal)`
	width: ${rem('580px')} !important;

	div.ant-modal-content {
		border-radius: 20px !important;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15) !important;
		padding: 20px !important;
		div.ant-modal-header {
			padding: 20px 0;
		}
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
