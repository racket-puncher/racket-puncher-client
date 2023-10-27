import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Menu = () => {
	return (
		<MenuContainer>
			<TopArea>
				<IconButton>닫기 버튼</IconButton>
			</TopArea>
			<MenuList>
				<button>메뉴</button>
				<button>메뉴</button>
				<button>메뉴</button>
				<button>메뉴</button>
			</MenuList>
			<BottomArea>
				<button>로그인</button>
				<button>회원가입</button>
			</BottomArea>
		</MenuContainer>
	);
};

export default Menu;

const resetBtnStyle = styled.button`
	background-color: transparent;
	padding: 0px;
	margin: 0px;
	border: none;
	border-radius: 0px;
	cursor: pointer;
`;

const MenuContainer = styled.div`
	position: absolute;
	top: 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	min-height: 100vh;
	width: ${rem('640px')};
	padding: 0 ${rem('30px')};

	background-color: white;
`;

const TopArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

	height: ${rem('80px')};
	width: 100%;
	padding: ${rem('20px')} ${rem('30px')};
	border-bottom: solid 1px #c4c4c4;
`;
const MenuList = styled.ul`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: ${rem('30px')};

	* {
		margin-bottom: ${rem('20px')};
	}
`;

const BottomArea = styled.div`
	display: flex;
	flex-direction: column;
	* {
		margin-bottom: ${rem('20px')};
	}
`;

const IconButton = styled(resetBtnStyle)`
	width: ${rem('34px')};
	height: ${rem('34px')};
`;
