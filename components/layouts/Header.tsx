import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import useRouterHook from '../../utils/useRouterHook';
import { ImageBox } from '../../styles/ts/components/box';
import { ImgButton } from '../../styles/ts/components/buttons';
import MenuModal from './MenuModal';
import { useRouter } from 'next/router';

export default function Header() {
	// To do
	// - 메뉴 모달 토글
	const router = useRouter();

	const [isBackBtnVisible, setIisBackBtnVisible] = useState(false);
	const { movePage, moveToBack, pathNameStartsWith } = useRouterHook();

	useEffect(() => {
		if (
			pathNameStartsWith('/login') ||
			pathNameStartsWith('/register') ||
			pathNameStartsWith('/post')
		) {
			setIisBackBtnVisible(true);
		} else {
			setIisBackBtnVisible(false);
		}
	}, [router.pathname]);

	const [isModalOpen, setisModalOpen] = useState(false);
	const showMadal = () => setisModalOpen(true);
	const toggleModal = (prev: boolean) => setisModalOpen((prev) => !prev);

	return (
		<>
			<MenuModal isOpen={isModalOpen} toggleModal={toggleModal} />
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
						<img src='/images/logo.png' alt='로고이미지' />
					</ImageBox>
				</LogoButton>
				<ImgButton onClick={showMadal} aria-label='메뉴'>
					<ImageBox width={'34px'} height={'34px'}>
						<img src='/svg/menu-ico.svg' alt='메뉴 아이콘' />
					</ImageBox>
				</ImgButton>
			</HeaderContainer>
		</>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: ${rem('120px')};
	padding: 0px ${rem('30px')};
	max-width: ${rem('640px')};
	border-bottom: solid 1px #c4c4c4;
`;

const LogoButton = styled(ImgButton)`
	display: flex;
	justify-content: center;

	width: fit-content;
	height: fit-content;
`;
