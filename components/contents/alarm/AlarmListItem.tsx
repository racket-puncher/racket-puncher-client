import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeSpSm,
	InputBoxColor,
	InputBorderColor,
	BlackColor,
} from 'styles/ts/common';

import { ImageBox } from 'styles/ts/components/box';

interface IAlarmListItemProps {
	alarmTestData: {
		alarmId: string;
		alarmTitle: string;
		alarmContent: string;
		pageTitle: string;
		pageURL: string;
	};
}

export default function AlarmListItem(props: IAlarmListItemProps) {
	const { alarmTitle, alarmContent, pageURL, pageTitle } = props.alarmTestData;
	return (
		<AlarmListItemContainer>
			<AlarmDataArea>
				<AlarmItemTitle>{`${alarmTitle}`} </AlarmItemTitle>
				<AlarmItemContent>
					<span>
						<a href={`${pageURL}`}>{`${pageTitle}`}</a>
					</span>
					{`${alarmContent}`}
				</AlarmItemContent>
			</AlarmDataArea>
			<IconArea>
				<ImageBox width='40px' height='40px'>
					<img src='./svg/bell-icon.svg' alt='종모양 아이콘' />
				</ImageBox>
			</IconArea>
		</AlarmListItemContainer>
	);
}

const AlarmListItemContainer = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: ${rem('5px')};

	width: 100%;
	max-height: fit-content;
	margin-bottom: ${rem('20px')};
	padding: ${rem('15px')};
	background-color: ${InputBoxColor};
	border-radius: ${rem('20px')};
	border: solid 1px ${InputBorderColor};

	box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
`;

const AlarmDataArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: ${rem('10px')};
`;

const AlarmItemTitle = styled.div`
	text-align: left;
	font-family: ${FontFamilySemiBold};
	font-size: ${FontSizeLg};
	color: ${BlackColor};
`;
const AlarmItemContent = styled(AlarmItemTitle)`
	font-family: ${FontFamilyRegular};
	font-size: ${FontSizeSpSm};
`;

const IconArea = styled.div`
	min-width: ${rem('40px')};
`;
