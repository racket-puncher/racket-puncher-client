import React, { useState, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-mobile-datepicker';
import styled from 'styled-components';
import { ImageBox } from '../../../styles/ts/components/box';
import { FontSizeSpSm } from '../../../styles/ts/common';
import { rem } from 'polished';
import { dateFormatter } from '../../../utils/formatter';
import { prefix } from '../../../constants/prefix';

interface IDatePickerProps {
	readonly dateState: string;
	readonly setDateState: any;
}

const options = {
	headerFormat: 'YYYY년 MM월 DD일',
	dateFormat: ['YYYY', 'M', 'D'],
	locale: 'ko',
	confirmText: '확인',
	cancelText: '취소',
};

export default function CustomDatePicker(props: IDatePickerProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (selectedDate: Date) => {
		props.setDateState(dateFormatter(selectedDate));
		setIsOpen(false);
	};

	return (
		<>
			<CustomDatePickerBox onClick={() => setIsOpen(true)}>
				<p>{props.dateState}</p>
				<ImageBox width={'24px'} height={'24px'}>
					<img src={`${prefix}/images/calendar.png`} alt='calendar' />
				</ImageBox>
			</CustomDatePickerBox>
			<DatePicker
				isOpen={isOpen}
				onSelect={handleSelect}
				onCancel={() => {
					props.setDateState('');
					setIsOpen(false);
				}}
				date={new Date()}
				{...options}
			/>
		</>
	);
}

const CustomDatePickerBox = styled.div`
	width: 100%;
	padding: 17px ${rem('14px')};
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #f9f9f9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	p {
		font-size: ${rem(`${FontSizeSpSm}`)};
		font-family: Pretendard-Regular;
	}
`;
