import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useRouter } from 'next/router';

import BackIcon from '../../../assets/svg/BackIcon';
import MenuIcon from '../../../assets/svg/MenuIcon';
import LogoSVG from '../../../assets/svg/LogoSVG';
import Menu from './Menu';

const Header = () => {
	const router = useRouter();

	return (
		<>
			{/* <Menu /> */}
			<HeaderContainer>
				<IconButton
					onClick={() => router.back()}
					aria-label='이전 페이지로 이동'
					style={{ display: 'none' }}>
					<BackIcon />
				</IconButton>
				<LogoButton onClick={() => router.push('/main')} aria-label='메인으로 이동'>
					{/* <img src='../../assets/image/logo.png' alt='라켓펀처 로고' /> */}
					<LogoSVG />
				</LogoButton>
				<IconButton aria-label='메뉴'>
					<MenuIcon />
				</IconButton>
			</HeaderContainer>
		</>
	);
};

export default Header;

const resetBtnStyle = styled.button`
	background-color: transparent;
	padding: 0px;
	margin: 0px;
	border: none;
	border-radius: 0px;
	cursor: pointer;
`;

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: ${rem('80px')};
	max-width: ${rem('640px')};
	margin: 0 auto;
	padding: ${rem('20px')} ${rem('30px')};
	border-bottom: solid 1px #c4c4c4;
`;

const LogoButton = styled(resetBtnStyle)`
	display: flex;
	justify-content: center;
`;

const IconButton = styled(resetBtnStyle)`
	width: ${rem('34px')};
	height: ${rem('34px')};
`;
