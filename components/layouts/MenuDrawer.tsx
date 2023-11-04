import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import useRouterHook from '../../utils/useRouterHook';
import { RoundButton } from '../../styles/ts/components/buttons';
import DrawerBox from '../common/drawer';

interface MenuDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

export default function MenuDrawer(props: MenuDrawerProps) {
	// To do
	// 로그인 여부에 따라 로그인 관련 버튼 선택적으로 노출 분기 처리~

	const { isOpen, toggleDrawer } = props;
	const { movePage } = useRouterHook();
	return (
		<DrawerBox
			placement='right'
			width='100%'
			height='100vh'
			isOpen={isOpen}
			toggleDrawer={() => toggleDrawer(isOpen)}>
			<MenuContainer>
				<MenuArea>
					<RoundButton
						onClick={() => {
							movePage('/');
							toggleDrawer(isOpen);
						}}
						colorstyle={'is-green'}
						aria-label='메인 페이지로 이동'>
						소셜 매치
					</RoundButton>
					<RoundButton
						onClick={() => {
							movePage('/my');
							toggleDrawer(isOpen);
						}}
						colorstyle={'is-green'}
						aria-label='마이 페이지로 이동'>
						마이페이지
					</RoundButton>
					<RoundButton
						onClick={() => {
							movePage('/alarm');
							toggleDrawer(isOpen);
						}}
						colorstyle={'is-green'}
						aria-label='알림 페이지로 이동'>
						알림 페이지
					</RoundButton>
				</MenuArea>
				<SignArea>
					<RoundButton
						onClick={() => {
							movePage('/login');
							toggleDrawer(isOpen);
						}}
						colorstyle={'is-black'}
						aria-label='로그인 페이지로 이동'>
						로그인
					</RoundButton>
					<RoundButton
						onClick={() => {
							movePage('/register');
							toggleDrawer(isOpen);
						}}
						colorstyle={'is-black'}
						aria-label='회원가입 페이지로 이동'>
						회원가입
					</RoundButton>
				</SignArea>
			</MenuContainer>
		</DrawerBox>
	);
}

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	min-height: 100%;
`;

const MenuArea = styled.div`
	width: 100%;
	button {
		text-align: right;
		margin-bottom: ${rem('20px')};
		padding: ${rem('20px')} ${rem('30px')};
	}
`;

const SignArea = styled(MenuArea)`
	button {
		text-align: center;
	}
`;
