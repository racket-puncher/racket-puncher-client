import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	FontSizeSm,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
} from '../../../styles/ts/common';

interface ITextAreaProps {
	width?: string;
	height?: string;
	placeholder?: string;
	value: string;
	onChange: (e) => void;
}

export default function TextArea(props: ITextAreaProps) {
	const { placeholder, value, onChange } = props;
	return <TextAreaContainer placeholder={`${placeholder}`} value={value} onChange={onChange} />;
}

const TextAreaContainer = styled.textarea`
	resize: none !important;

	width: 100%;
	max-width: 100%;
	height: calc(width * 0.75);
	min-height: ${rem('140px')};
	max-height: ${rem('380px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: 10px;
	font-family: ${FontFamilyRegular};
	font-size: ${FontSizeSpSm};

	&:focus {
		border: 1px solid ${PrimaryColor};
		outline: none;
	}
`;
