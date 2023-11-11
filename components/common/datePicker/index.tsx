import React, { useState, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-mobile-datepicker';
import styled from 'styled-components';
import { ImageBox } from '../../../styles/ts/components/box';
import { FontSizeSpSm } from '../../../styles/ts/common';
import { rem } from 'polished';
import { dateFomatter } from '../../../utils/fomatter';
import { prefix } from '../../../constants/prefix';

interface IDatePickerProps {
	readonly dateState: Date;
	readonly setDateState: Dispatch<SetStateAction<Date>>;
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
	const [showDateStr, setShowDateStr] = useState('');

	const handleSelect = (selectedDate: Date) => {
		props.setDateState(selectedDate);
		setShowDateStr(dateFomatter(selectedDate));
		setIsOpen(false);
	};
	return (
		<>
			<CustomDatePickerBox onClick={() => setIsOpen(true)}>
				<p>{showDateStr}</p>
				<ImageBox width={'24px'} height={'24px'}>
					<img src={`${prefix}/images/calendar.png`} alt='calendar' />
				</ImageBox>
			</CustomDatePickerBox>
			<DatePicker
				isOpen={isOpen}
				onSelect={handleSelect}
				onCancel={() => setIsOpen(false)}
				date={props.dateState}
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
