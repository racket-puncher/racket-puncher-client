import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImageBox } from '../../../../styles/ts/components/box';
import { FontFamilyRegular, FontSizeSpSm, LightGrayColor } from '../../../../styles/ts/common';
import DatePicker from 'react-mobile-datepicker';
import { timeFormatter } from '../../../../utils/formatter';

interface IPickerProps {
	readonly id: string;
	readonly setState: Dispatch<SetStateAction<string>>;
}

const options = {
	headerFormat: 'hh시 mm분',
	dateFormat: ['hh', 'mm'],
	locale: 'ko',
	confirmText: '확인',
	cancelText: '취소',
};

const timeConfig = {
	hour: {
		format: 'hh',
		caption: '시',
		step: 1,
	},
	minute: {
		format: 'mm',
		caption: '분',
		step: 15,
	},
};

export default function TPicker(props: IPickerProps) {
	const [timeState, setTimeState] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (selected: Date) => {
		setTimeState(selected);
		props.setState(timeFormatter(selected));
		setIsOpen(false);
	};

	return (
		<>
			<CustomDatePickerBox onClick={() => setIsOpen(true)}>
				<p>
					{timeState.getHours()}시 {timeState.getMinutes()}분
				</p>
				<ImageBox width={'24px'} height={'24px'}>
					<img src='./svg/clock-icon.svg' alt='시계' color={LightGrayColor} />
				</ImageBox>
			</CustomDatePickerBox>

			<DatePicker
				value={timeState}
				dateConfig={timeConfig}
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
		font-size: ${rem(`${FontSizeSpSm}`)};
		font-family: ${FontFamilyRegular};
	}
`;
