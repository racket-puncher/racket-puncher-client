import { Modal as AntdModal } from 'antd';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface IModalProps {
	title: string;
	children: ReactNode;
	isOpen: boolean;
	footerButtons?: ReactElement[];
	toggleModal: () => void;
	onOk: () => void;
	onCancel: () => void;
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

	return (
		<>
			<CustomModal
				title={props.title}
				open={props.isOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered={true}
				footer={props.footerButtons || []}>
				{props.children}
			</CustomModal>
		</>
	);
}

const CustomModal = styled(AntdModal)`
  width: ${rem('580px')}; !important;

  div.ant-modal-content {
    border-radius: 20px;
  !important;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  !important;
  }
`;
