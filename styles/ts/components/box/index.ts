import styled from 'styled-components';
import { rem } from 'polished';
import { InputBorderColor } from '../../common';

interface IImageProps {
	readonly width?: string;
	readonly height?: string;
}

export const ImageBox = styled.div<IImageProps>`
	width: ${(props) => rem(props.width || '30px')};
	height: ${(props) => rem(props.height || '30px')};
	img {
		max-width: 100%;
		display: block;
	}
`;

export const GrayLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${InputBorderColor};
`;
