import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';
import { Collapse as AntdCollapse, ConfigProvider } from 'antd';
import type { CollapseProps as IAntdCollapseProps } from 'antd';

import {
	PrimaryColor,
	WhiteColor,
	PlayerListBGColor,
	FontSizeSm,
	FontFamilyMedium,
	LightGrayColor,
} from 'styles/ts/common';
import { ImageBox } from 'styles/ts/components/box';
import PlayerCard from '../../../common/playerCard';
import MatchesService from 'service/matches/service';
import { matchTypeName } from 'constants/userInfoOptions';
import useToast from 'utils/useToast';
import useRouterHook from 'utils/useRouterHook';
import useCookies from 'utils/useCookies';

interface IMyListItemProps {
	postInfo: {
		readonly matchingId: string;
		readonly key: string;
		readonly date: string;
		readonly title: string;
		readonly location: string;
		readonly matchingType: string;
		readonly isActive?: boolean;
		// readonly playerList?: { userNickName: string; userEmail: string; profilePicURL: string }[];
	};
}
// const playerList = [
// 	{
// 		userNickName: '뿡뿡이',
// 		userEmail: 'bboongbboong2@gmail.com',
// 		profilePicURL:
// 			'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
// 	},
// 	{
// 		userNickName: '텐텐2',
// 		userEmail: 'tenistenis@naver.com',
// 		profilePicURL:
// 			'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg',
// 	},
// ];

export default function MyListItem(props: IMyListItemProps) {
	// To do
	const { getMatchingApplyState } = MatchesService;
	const { matchingId, key, date, title, location, matchingType } = props.postInfo;
	const { checkLogin, getCookie } = useCookies();
	const { replace } = useRouterHook();
	const { setMessage } = useToast();
	const [playerList, setPlayersList] = useState([]);

	useEffect(() => {
		const getNSetData = async () => {
			try {
				const res = await getMatchingApplyState(matchingId);
				const data = res.data.response;
				console.log(data);
				setPlayersList(data.confirmedMembers);
			} catch (err) {
				console.log(err);
			}
		};
		if (!checkLogin()) {
			setMessage('error', '로그인이 필요한 서비스입니다.');
			replace('/login');
		} else if (getCookie('id') !== '') {
			getNSetData();
		}
	}, [playerList]);

	const mt = matchTypeName.filter((ele) => ele.value === matchingType)[0];
	const items: IAntdCollapseProps['items'] = [
		{
			key: key,
			label: (
				<Header>
					<DateNDay id='dataNDay'>{date.split('-')[1] + '/' + date.split('-')[2] || '-'}</DateNDay>
					<TitleArea>
						<TitleLink id='title' href={`/main/detailMatch/${matchingId}`} target={'_blank'}>
							{title.length < 20 ? title : title.slice(0, 19) + '...' || '-'}
						</TitleLink>{' '}
						/ {location.split(' ')[0] + ' ' + location.split(' ')[1] || '-'} /{' '}
						{(mt && mt.label) || '-'}
					</TitleArea>
					<IconImageBox id='collapseIcon' width='24px' height='24px'>
						<img src='/svg/arrow.svg' />
					</IconImageBox>
				</Header>
			),
			children: (
				<PlayerCardContainer>
					{playerList.map((ele) => {
						const { userNickName, siteUserId } = ele;
						return (
							<PlayerCard key={uuidv4()} userNickname={userNickName} siteUserId={siteUserId} />
						);
					})}
				</PlayerCardContainer>
			),
			showArrow: false,
		},
	];

	return (
		<ConfigProvider
			theme={{
				components: {
					Collapse: {
						borderRadiusLG: 20,
						headerBg: PrimaryColor,
						headerPadding: '10px 20px',
						colorTextHeading: WhiteColor,
						fontFamily: FontFamilyMedium,
					},
				},
			}}>
			<MyListItemContainer
				aria-role='listitem'
				items={items}
				defaultActiveKey={['1']}
				bordered={false}
			/>
		</ConfigProvider>
	);
}

const MyListItemContainer = styled(AntdCollapse)`
	width: 100%;
	margin-bottom: ${rem('30px')};

	.ant-collapse-content-box {
		background-color: ${PlayerListBGColor};
		border-radius: 0px 0px ${rem('20px')} ${rem('20px')};
	}
`;

const Header = styled.div`
	display: grid;
	grid-template-columns: ${rem('50px')} auto ${rem('25px')};
	grid-template-areas: 'dateNDay title collapseIcon';
	gap: ${rem('10px')};

	height: ${rem('30px')};
	font-size: ${rem(`${FontSizeSm}`)};
`;

const DateNDay = styled.span`
	grid-area: 'dateNDay';
	text-align: left;
`;

const TitleArea = styled.div`
	grid-area: 'title';
	text-align: left;
	color: ${WhiteColor};
	white-space: nowrap;
	overflow: hidden;
`;

const TitleLink = styled.a`
	color: ${WhiteColor};

	&:hover,
	&:visited {
		color: ${LightGrayColor};
		text-decoration: underline;
	}
`;

const IconImageBox = styled(ImageBox)`
	grid-area: 'collapseIcon';
`;

const PlayerCardContainer = styled.div`
	padding: 16px 4px 4px 4px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
