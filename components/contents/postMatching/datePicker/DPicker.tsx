import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImageBox } from '../../../../styles/ts/components/box';
import { FontFamilyRegular, FontSizeSpSm } from '../../../../styles/ts/common';
import DatePicker from 'react-mobile-datepicker';
import { dateFormatter } from 'utils/formatter';

interface IPickerProps {
	readonly id?: string;
	readonly setState: Dispatch<SetStateAction<string>>;
	readonly type?: Array<boolean>;
	readonly matchDate?: string;
}

export default function DPicker(props: IPickerProps) {
	const [dateState, setDateState] = useState(new Date());
	// useEffect(() => props.matchDate && setDateState(new Date(matchDate)), [props.matchDate]);

	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (selectedDate: Date) => {
		setDateState(selectedDate);
		props.setState(dateFormatter(selectedDate));
		setIsOpen(false);
	};
	// 못선택하게 하는 방법...?!

	const dateConfig = {
		year: {
			format: 'YYYY',
			caption: '년',
			step: 1,
		},
		month: {
			format: 'MM',
			caption: '월',
			step: 1,
		},
		date: {
			format: 'DD',
			caption: '일',
			step: 1,
		},
	};

	const options = {
		headerFormat: 'YYYY/MM/DD',
		dateFormat: ['YYYY', 'M', 'D'],
		locale: 'ko',
		confirmText: '확인',
		cancelText: '취소',
	};
	const days = {
		0: '일',
		1: '월',
		2: '화',
		3: '수',
		4: '목',
		5: '금',
		6: '토',
	};

	return (
		<>
			<CustomDatePickerBox onClick={() => setIsOpen(true)}>
				<p>
					{`${dateState.getFullYear()}`}년 {`${dateState.getMonth() + 1}`}월{' '}
					{`${dateState.getDate()}`}일 {`${days[dateState.getDay()]}`}요일
				</p>
				<ImageBox width={'24px'} height={'24px'}>
					<img src='/images/calendar.png' alt='calendar' />
				</ImageBox>
			</CustomDatePickerBox>

			<DatePicker
				value={dateState}
				dateConfig={dateConfig}
				isOpen={isOpen}
				onSelect={handleSelect}
				onCancel={() => setIsOpen(false)}
				{...options}
			/>
		</>
	);
}

const CustomDatePickerBox = styled.div`
	width: 100%;
	height: ${rem('50px')};
	padding: 17px ${rem('14px')};
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #f9f9f9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	p {
		flex: 1;
		font-size: ${rem(`${FontSizeSpSm}`)};
		font-family: ${FontFamilyRegular};
	}
`;
