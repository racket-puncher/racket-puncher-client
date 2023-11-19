import React, { useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import useRouterHook from '../../utils/useRouterHook';
import { RoundButton } from '../../styles/ts/components/buttons';
import DrawerBox from '../common/drawer';
import useCookies from '../../utils/useCookies';
import Link from 'next/link';

interface MenuDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

export default function MenuDrawer(props: MenuDrawerProps) {
	const { checkLogin, removeCookie } = useCookies();
	const { isOpen, toggleDrawer } = props;
	const { movePage, reload } = useRouterHook();

	return (
		<DrawerBox
			placement='right'
			width='100%'
			height='100vh'
			isOpen={isOpen}
			toggleDrawer={() => toggleDrawer(isOpen)}>
			<MenuContainer>
				{checkLogin() ? (
					<>
						<MenuArea>
							<Link href='/main'>
								<RoundButton
									onClick={() => {
										// movePage('/main');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='메인 페이지로 이동'>
									소셜 매치
								</RoundButton>
							</Link>
							<Link href='/my'>
								<RoundButton
									onClick={() => {
										// movePage('/my');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='마이 페이지로 이동'>
									마이페이지
								</RoundButton>
							</Link>
							<Link href='/alarm'>
								<RoundButton
									onClick={() => {
										// movePage('/alarm');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='알림 페이지로 이동'>
									알림 페이지
								</RoundButton>
							</Link>
						</MenuArea>
						<SignArea>
							<RoundButton
								colorstyle={'is-black'}
								aria-label='로그아웃'
								onClick={() => {
									removeCookie('accessToken');
									toggleDrawer(isOpen);
									reload();
								}}>
								로그아웃
							</RoundButton>
						</SignArea>
					</>
				) : (
					<>
						<MenuArea>
							<Link href='/main'>
								<RoundButton
									onClick={() => {
										// movePage('/main');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='소셜 매치'>
									소셜 매치
								</RoundButton>
							</Link>
						</MenuArea>
						<SignArea>
							<Link href='/login'>
								<RoundButton
									onClick={() => {
										// movePage('/login');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-black'}
									aria-label='로그인 페이지로 이동'>
									로그인
								</RoundButton>
							</Link>
							<Link href='/register'>
								<RoundButton
									onClick={() => {
										// movePage('/register');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-black'}
									aria-label='회원가입 페이지로 이동'>
									회원가입
								</RoundButton>
							</Link>
						</SignArea>
					</>
				)}
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
