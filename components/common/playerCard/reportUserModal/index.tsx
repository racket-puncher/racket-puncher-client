import React, { useState, ReactNode, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ModalBox from '../../modal';
import { SquareButton } from '../../../../styles/ts/components/buttons';
import { InputBox } from '../../../../styles/ts/components/input';
import TextArea from '../../textarea';

interface IReportUserModalProps {
	readonly userNickName: string;
	readonly userEmail: string;
	readonly profilePicURL: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
	readonly onOk: () => void;
}

export default function ReportUserModal(props: IReportUserModalProps) {
	const { userNickName, userEmail, profilePicURL, isOpen, toggleModal, onCancel, onOk } = props;
	// userId로 회원정보 불러오기
	// useEffect(()=> userId)
	const [contentState, setContentState] = useState('');
	// const submitReport = (e: MouseEvent) => {
	// 	e.preventDefault();
	// 	console.log(e.target.);
	// };

	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel} onOk={onOk}>
				<UserReportForm>
					<InputBox>
						<label> 사용자 신고하기</label>
						<ReportTextArea
							placeholder='신고 사유 내용 입력'
							value={contentState}
							onChange={(e) => setContentState(e.currentTarget.value)}
						/>
					</InputBox>
					<SubmitReportBtn>신고하기</SubmitReportBtn>
				</UserReportForm>
			</ModalBox>
		</>
	);
}

const UserReportForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ReportTextArea = styled(TextArea)`
	height: ${rem('140px')};
`;

const SubmitReportBtn = styled(SquareButton)`
	width: ${rem('180px')};
	height:;
	margin: 0px auto;
`;