import styled from 'styled-components';
import { InputBox } from '../../../styles/ts/components/input';
import { InputErrorText } from '../../../styles/ts/components/text';
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RoundButton } from '../../../styles/ts/components/buttons';

const schema = yup.object().shape({
	password: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
	rePassword: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
});

export default function FindPwdResult() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const changePwdBtn = () => {};

	return (
		<>
			<FindPwdResultContainer>
				<InputContainer>
					<InputBox>
						<label htmlFor='changePwd'>신규 비밀번호</label>
						<input id='changePwd' type={'password'} {...register('password')} />
						{errors.password?.message && <InputErrorText>{errors.password.message}</InputErrorText>}
					</InputBox>
					<InputBox>
						<label htmlFor='changeRePwd'>신규 비밀번호 확인</label>
						<input id='changeRePwd' type={'password'} {...register('rePassword')} />
						{errors.rePassword?.message && (
							<InputErrorText>{errors.rePassword.message}</InputErrorText>
						)}
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						onClick={() => handleSubmit(changePwdBtn)}
						disabled={!watch[('password', 'rePassword')]}>
						비밀번호 변경
					</RoundButton>
				</ButtonBox>
			</FindPwdResultContainer>
		</>
	);
}

const FindPwdResultContainer = styled.div`
	margin-top: 50px;
`;

const InputContainer = styled.div`
	margin-top: 30px;
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
