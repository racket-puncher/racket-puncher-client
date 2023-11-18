import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';
import DrawerBox from 'components/common/drawer';
import { InputBox } from 'styles/ts/components/input';
import { SquareButton } from 'styles/ts/components/buttons';
import { GrayLine } from 'styles/ts/components/box';
import {
	LightBlackColor,
	InputBoxColor,
	InputBorderColor,
	BlackColor,
	PrimaryColor,
	FontSizeSpSm,
	FontSizeMd,
	FontSizeMdLg,
} from 'styles/ts/common';
import { CustomBadge } from 'styles/ts/components/badge';

interface ISearchDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: () => void;
	readonly setState: Dispatch<
		SetStateAction<{ address: string; name: string; lat: string; len: string }>
	>;
}

export default function SearchCourtDrawer(props: ISearchDrawerProps) {
	const { isOpen, toggleDrawer, setState } = props;
	const [keyword, setKeyword] = useState('');
	const [resultData, setResultData] = useState([]);
	const getResult = (typedKeyword: string) => {
		const places = new kakao.maps.services.Places();
		places.keywordSearch(typedKeyword, (result, status, _pagination) => {
			if (status === kakao.maps.services.Status.OK) {
				console.log(result);
				setResultData(result);
			} else {
				console.log(status);
			}
		});
	};

	// const data = { place_name: '샘플', x: 33.5563, y: 126.7958 };

	return (
		<>
			<DrawerBox
				title='경기장 검색'
				isOpen={isOpen}
				placement='bottom'
				height='100%'
				toggleDrawer={toggleDrawer}>
				<InputNBtnArea>
					<InputBox>
						<input aria-label='검색어 입력창' onChange={(e) => setKeyword(e.target.value)} />
					</InputBox>
					<SquareButton
						height={'50px'}
						colorstyle='is-black'
						type='submit'
						onClick={(event) => {
							event.preventDefault();
							console.log(keyword);
							getResult(keyword);
						}}>
						검색하기
					</SquareButton>
				</InputNBtnArea>
				<DescTextBox>
					<p>
						찾으시려는 도로명주소, 동(읍/면/리) 또는 건물명을 입력해주세요.
						<br />
						(예 : 판교동, 판교원로 68, 판교실리콘파크)
					</p>
				</DescTextBox>
				<GrayLine />
				<AddressContainer>
					{resultData.map((_, i) => {
						return (
							<AddressBoxWrap key={uuidv4()}>
								<AddLeftWrap>
									<LocationName href={resultData[i].place_url} target='_blank'>
										{resultData[i].place_name}
									</LocationName>

									<AddressBox>
										<CustomBadge color={PrimaryColor}>도로명</CustomBadge>
										<p>{resultData[i].road_address_name}</p>
									</AddressBox>
									<AddressBox>
										<CustomBadge>지번</CustomBadge>
										<p>{resultData[i].address_name}</p>
									</AddressBox>
								</AddLeftWrap>
								<AddRightWrap
									onClick={() => {
										toggleDrawer();
										setState({
											address: resultData[i].road_address_name || resultData[i].address_name,
											name: resultData[i].place_name,
											lat: resultData[i].x,
											len: resultData[i].y,
										});
									}}>
									선택
								</AddRightWrap>
							</AddressBoxWrap>
						);
					})}
				</AddressContainer>
			</DrawerBox>
		</>
	);
}

const InputNBtnArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${rem('20px')};

	.input__InputBox-sc-w6l3ed-0 {
		flex: 2;
	}

	.buttons__SquareButton-sc-xhpq7c-1 {
		flex: 1;
		min-width: fit-content;
		margin-bottom: 20px;
	}
`;
const DescTextBox = styled.div`
	margin-bottom: 20px;

	p {
		font-size: ${rem(FontSizeSpSm)};
		color: ${LightBlackColor};
		font-family: Pretendard-Regular;
		line-height: ${rem(FontSizeMdLg)};
	}
`;

const AddressContainer = styled.div`
	margin-top: 20px;
`;

const AddressBoxWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${InputBoxColor};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	padding: ${rem('15px')};
	margin-bottom: 10px;
`;

const AddLeftWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-right: ${rem('20px')};
`;

const LocationName = styled.a`
	font-size: ${rem(FontSizeSpSm)};
	color: ${LightBlackColor};
	font-family: Pretendard-Bold;
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;

	&:first-child {
		margin-bottom: 10px;
	}

	p {
		margin-left: ${rem('10px')};
		font-size: ${rem(FontSizeSpSm)};
		font-family: Pretendard-Regular;
		line-height: ${rem(FontSizeMd)};
	}
`;

const AddRightWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${rem(FontSizeMd)};
	font-family: Pretendard-Regular;
	color: ${BlackColor};
`;
