import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import useRouterHook from '../../utils/useRouterHook';
import { RoundButton, ImgButton } from '../../styles/ts/components/buttons';
import { ImageBox } from '../../styles/ts/components/box';

interface MenuModalProps {
	readonly isOpen: boolean;
	readonly toggleModal: (prev: boolean) => void;
}

export default function MenuModal(props: MenuModalProps) {
	// To do
	// - 스크롤 안되게
	// X 아이콘

	const { isOpen, toggleModal } = props;
	const { movePage } = useRouterHook();
	return (
		<MenuContainer style={{ display: isOpen === true ? 'block' : 'none' }}>
			<TopArea>
				<ImgButton onClick={() => toggleModal(isOpen)}>
					<ImageBox width={'34px'} height={'34px'}>
						<img src='/svg/back-ico.svg' alt='뒤로가기 아이콘' />
					</ImageBox>
				</ImgButton>
			</TopArea>
			<MenuArea>
				<RoundButton onClick={() => movePage('/main')} colorstyle={'is-green'}>
					소셜 매치
				</RoundButton>
				<RoundButton onClick={() => movePage('/my')} colorstyle={'is-green'}>
					마이페이지
				</RoundButton>
			</MenuArea>
			<BottomArea>
				<RoundButton onClick={() => movePage('/login')} colorstyle={'is-black'}>
					로그인
				</RoundButton>
				<RoundButton onClick={() => movePage('/register')} colorstyle={'is-black'}>
					회원가입
				</RoundButton>
			</BottomArea>
		</MenuContainer>
	);
}

const MenuContainer = styled.div`
	position: absolute;
	top: 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	min-height: 100vh;
	width: 100%;
	max-width: ${rem('640px')};
	background-color: white;
`;

const TopArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

	width: 100%;
	height: ${rem('120px')};
	border-bottom: solid 1px #c4c4c4;

	div {
		margin-right: ${rem('30px')};
	}
`;

const BottomArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: ${rem('30px')};

	* {
		margin-bottom: ${rem('20px')};
	}
`;

const MenuArea = styled(BottomArea)`
	flex: 1;
`;
