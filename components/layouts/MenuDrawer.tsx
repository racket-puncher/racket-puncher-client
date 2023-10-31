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
	// 로그인 여부에 따라 버튼 선택적으로 노출시키기

	const { isOpen, toggleDrawer } = props;
	const { movePage } = useRouterHook();
	return (
		<MenuContainer
			width={'100%'}
			height={'100vh'}
			isOpen={isOpen}
			placement={'right'}
			toggleDrawer={() => toggleDrawer(isOpen)}>
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
					aria-label='마이페이지로 이동'>
					마이페이지
				</RoundButton>
			</MenuArea>
			<BottomArea>
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
			</BottomArea>
		</MenuContainer>
	);
}

const MenuContainer = styled(DrawerBox)`
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	// justify-content: space-between;

	// height: 500px;
`;

const MenuArea = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;

	* {
		width: 100%;
		margin-bottom: ${rem('20px')};
	}
`;

const BottomArea = styled(MenuArea)``;
