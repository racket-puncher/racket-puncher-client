import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ImageBox } from 'styles/ts/components/box';
import { FontFamilyRegular, FontSizeSpSm, LightGrayColor } from 'styles/ts/common';
import DatePicker from 'react-mobile-datepicker';
import { timeFormatter } from 'utils/formatter';

interface IPickerProps {
	readonly setState: Dispatch<SetStateAction<string>>;
	readonly type: Array<boolean>;
}

export default function TPicker(props: IPickerProps) {
	const options = {
		headerFormat: props.type[1] ? 'hh시 mm분' : 'hh시',
		dateFormat: ['hh', 'mm'],
		locale: 'ko',
		confirmText: '확인',
		cancelText: '취소',
	};

	const timeConfig = props.type[1]
		? {
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
		  }
		: {
				hour: {
					format: 'hh',
					caption: '시',
					step: 1,
				},
		  };

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
					{timeState.getHours() > 9 ? timeState.getHours() : '0' + String(timeState.getHours())}시{' '}
					{props.type[1] && timeState.getMinutes() > 9
						? timeState.getMinutes()
						: '0' + String(timeState.getMinutes())}
					분
				</p>

				<ImageBox width={'24px'} height={'24px'}>
					<img src='/svg/clock-icon.svg' alt='시계' color={LightGrayColor} />
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
