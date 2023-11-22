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

// const resultData = [
// 	{
// 		road_address_name: '테스트 도로명 주소',
// 		address_name: '테스트 지번 주소',
// 		place_url: 'https://www.naver.com',
// 		place_name: '테스트 장소명',
// 		zip_code: '00000',
// 	},
// ];

interface ISearchDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: () => void;
	readonly setCourtInfos?: Dispatch<SetStateAction<{ address: string; lat: string; lon: string }>>;
	readonly setValue: (name: string, data: string) => void;
}

export default function SearchCourtDrawer(props: ISearchDrawerProps) {
	const { isOpen, toggleDrawer, setCourtInfos, setValue } = props;
	const [keyword, setKeyword] = useState('');
	const [resultData, setResultData] = useState([]);
	const displayPagination = (pagination) => {
		const paginationEl = document.getElementById('pagination');
		const fragment = document.createDocumentFragment();
		let i = null;
		// 기존에 추가된 페이지번호를 삭제합니다
		while (paginationEl.hasChildNodes()) {
			paginationEl.removeChild(paginationEl.lastChild);
		}
		for (i = 1; i <= pagination.last; i++) {
			const el = document.createElement('a');
			el.href = '#';
			el.innerHTML = i;
			if (i === pagination.current) {
				el.className = 'on';
			} else {
				el.onclick = (function (i) {
					return function () {
						pagination.gotoPage(i);
					};
				})(i);
			}
			fragment.appendChild(el);
		}
		paginationEl.appendChild(fragment);
	};
	const getResult = (typedKeyword: string) => {
		const places = new kakao.maps.services.Places();
		places.keywordSearch(typedKeyword, (result, status, pagination) => {
			if (status === kakao.maps.services.Status.OK) {
				console.log(result);
				setResultData(result);
				displayPagination(pagination);
			} else {
				console.log(status);
			}
		});
	};

	return (
		<>
			<DrawerBox
				title='주소 검색'
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
					{resultData.map((ele) => {
						return (
							<AddressBoxWrap
								key={uuidv4()}
								onClick={() => {
									setValue(
										'address',
										(ele.road_address_name || ele.address_name) +
											(ele.place_name && ' (' + ele.place_name + ')')
									);
									setValue('zipCode', ele.ZipCode);
									setCourtInfos &&
										setCourtInfos({
											address:
												(ele.road_address_name || ele.address_name) +
												(ele.place_name && ' (' + ele.place_name + ')'),
											lat: ele.x,
											lon: ele.y,
										});
									toggleDrawer();
								}}>
								<AddLeftWrap>
									<LocationName href={ele.place_url} target='_blank'>
										{ele.place_name}
									</LocationName>
									<AddressBox>
										<CustomBadge color={PrimaryColor}>도로명</CustomBadge>
										<p>{ele.road_address_name}</p>
									</AddressBox>
									<AddressBox>
										<CustomBadge>지번</CustomBadge>
										<p>{ele.address_name}</p>
									</AddressBox>
								</AddLeftWrap>
								<AddRightWrap>{ele.zip_code}</AddRightWrap>
							</AddressBoxWrap>
						);
					})}
					<PaginationArea>
						<div id={'pagination'}></div>
					</PaginationArea>
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

const PaginationArea = styled.div`
	min-width: 100%;
	font-family: Pretendard-Regular;

	div {
		min-width: fit-content;
	}
`;
