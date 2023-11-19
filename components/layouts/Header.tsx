import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useRouter } from 'next/router';

import { ImageBox } from '../../styles/ts/components/box';
import { ImgButton } from '../../styles/ts/components/buttons';
import { WhiteColor, HeaderBtnColor } from '../../styles/ts/common';
import useRouterHook from '../../utils/useRouterHook';
import MenuDrawer from './MenuDrawer';
import { prefix } from '../../constants/prefix';

export default function Header() {
	const router = useRouter();

	const [isBackBtnVisible, setIisBackBtnVisible] = useState(false);
	const { movePage, moveToBack, pathNameStartsWith } = useRouterHook();

	useEffect(() => {
		if (
			pathNameStartsWith('/login') ||
			pathNameStartsWith('/register') ||
			pathNameStartsWith('/post-matching') ||
			pathNameStartsWith('/edit-') ||
			pathNameStartsWith('/find') ||
			pathNameStartsWith('/main/detailMatch')
		) {
			setIisBackBtnVisible(true);
		} else {
			setIisBackBtnVisible(false);
		}
	}, [router.pathname]);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const showDrawer = () => setIsDrawerOpen(true);
	const toggleDrawer = (prev: boolean) => setIsDrawerOpen((prev) => !prev);

	return (
		<>
			<MenuDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
			<HeaderContainer>
				<ImgButton
					onClick={() => moveToBack()}
					aria-label='이전 페이지로 이동'
					style={{ display: isBackBtnVisible === true ? 'block' : 'none' }}>
					<ImageBox width={'34px'} height={'34px'}>
						<img src='/svg/back-ico.svg' alt='뒤로가기 아이콘' />
					</ImageBox>
				</ImgButton>
				<LogoButton onClick={() => movePage('/main')} aria-label='메인으로 이동'>
					<ImageBox width={'215.33px'} height={'20px'}>
						<img src={`${prefix}/images/logo.png`} alt='로고이미지' />
					</ImageBox>
				</LogoButton>
				<ImgButton onClick={showDrawer} aria-label='메뉴'>
					<ImageBox width={'34px'} height={'34px'}>
						<img src='/svg/menu-ico.svg' alt='메뉴 아이콘' />
					</ImageBox>
				</ImgButton>
			</HeaderContainer>
		</>
	);
}

const HeaderContainer = styled.div`
	position: sticky;
	top: 0px;
	z-index: 999;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: ${rem('80px')};
	padding: 0px ${rem('30px')};
	max-width: ${rem('640px')};
	border-bottom: solid 1px ${HeaderBtnColor};
	background-color: ${WhiteColor};
`;

const LogoButton = styled(ImgButton)`
	display: flex;
	justify-content: center;

	width: fit-content;
	height: fit-content;
`;
