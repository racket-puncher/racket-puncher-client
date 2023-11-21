import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ModalBox from 'components/common/modal';
import { SquareButton } from 'styles/ts/components/buttons';
import { InputBox } from 'styles/ts/components/input';
import { TextArea } from 'styles/ts/components/textarea';
import { CustomSelect } from 'styles/ts/components/select';
import { FontFamilyBold, FontSizeMd } from 'styles/ts/common';
import useCookies from 'utils/useCookies';
import usersService from 'service/users/service';
import useToast from 'utils/useToast';

const schema = yup.object().shape({
	// reportingUserId: yup.string().required(),
	reportedUserId: yup.string().required(),
	content: yup.string().required('신고사유를 선택해주세요.'),
});

interface IReportUserModalProps {
	readonly reportedUserId: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
	readonly onOk: () => void;
}

export default function ReportUserModal(props: IReportUserModalProps) {
	const {
		register: postReportUserRegister,
		handleSubmit: postReportUserHandleSubmit,
		setValue: postReportUserSetValue,
		getValues: postReportUserGetValues,
		watch: postReportUserWatch,
		formState: { errors: postReportUserErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { reportedUserId, isOpen, toggleModal, onCancel, onOk } = props;
	const { getCookie } = useCookies();

	// 쿠키에서 로그인한 신고자ID 불러오기
	useEffect(() => {
		// postReportUserSetValue('reportingUserId', getCookie('id'));
		postReportUserSetValue('reportedUserId', reportedUserId);
	}, []);
	// const [mainText, setMainText] = useState('');

	const { postReportUser } = usersService;
	const { setMessage } = useToast();

	const checkValidation = () => {
		if (!postReportUserWatch('reportedUserId') || !postReportUserWatch('content')) {
			return true;
		} else {
			return false;
		}
	};

	const onSubmitHandler = () => {
		const data = {
			// reportingUserId: postReportUserGetValues('reportingUserId'),
			reportedUserId: postReportUserGetValues('reportedUserId'),
			content: postReportUserGetValues('content'),
		};

		// postReportUser(data);
		toggleModal();
		setMessage('success', '신고되었습니다.');
	};

	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel} onOk={onOk}>
				<Title>사용자 신고하기</Title>
				<ReportUserForm>
					<InputBox>
						{/* <ReportTextArea aria-label='신고사유 입력칸' defaultValue={'신고 사유를 선택하세요.'} onChange={(e: string) => setMainText(e)}/> */}
						{/* <label htmlFor='reportUser'>신고사유</label> */}
						<ContentSelector
							name='reportUser'
							aria-label='신고사유 셀렉터'
							options={[
								{ value: 'GHOSTED_AFTER_CONFIRM', label: '매칭 확정 후 잠수' },
								{ value: 'OFFENSE_CHAT', label: '욕설 및 불쾌한 언행' },
								{ value: 'SPAM_POSTS', label: '스팸 홍보, 도배글 작성' },
								{ value: 'HARMFUL_POSTS', label: '유해 게시글 작성' },
							]}
							defaultValue={'신고 사유를 선택하세요.'}
							onChange={(e: string) => postReportUserSetValue('content', e)}
							{...postReportUserRegister('content')}
						/>
					</InputBox>
					{/* <HiddenInput {...postReportUserRegister('reportingUserId')} /> */}
					<HiddenInput {...postReportUserRegister('reportedUserId')} />
					<SubmitReportBtn
						type='submit'
						disabled={checkValidation()}
						// onClick={postReportUserHandleSubmit()}
					>
						신고하기
					</SubmitReportBtn>
				</ReportUserForm>
			</ModalBox>
		</>
	);
}

const Title = styled.div`
	margin-left: ${rem('10px')};
	font-family: ${FontFamilyBold};
	font-size: ${FontSizeMd};
`;

const ReportUserForm = styled.form`
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

const ContentSelector = styled(CustomSelect)`
	width: 100%;
	margin: ${rem('20px')} 0px;
`;

const HiddenInput = styled.input`
	position: absolute;
	width: 0px;
	height: 0px;
	max-width: 0px;
	max-height: 0px;
	background-color: transparent;
	padding: 0px;
	border: 1px solid transparent;
	border-radius: 0px;
	box-shadow: none;
	visibility: hidden;
`;
