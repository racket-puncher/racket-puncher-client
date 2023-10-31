import styled from 'styled-components';
import { rem } from 'polished';
import { InputBorderColor } from '../../common';

interface IImageProps {
	readonly width?: string;
	readonly height?: string;
	readonly heightInit?: boolean;
}

export const ImageBox = styled.div.withConfig({
	shouldForwardProp: (props) => props !== 'heightInit',
})<IImageProps>`
	width: ${(props) => rem(props.width || '30px')};
	height: ${(props) => (props.heightInit ? '' : rem(props.height || '30px'))};
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
