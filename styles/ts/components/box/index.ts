import styled from 'styled-components';
import { rem } from 'polished';

interface IImageProps {
	width?: string;
	height?: string;
}

export const ImageBox = styled.div<IImageProps>`
	width: ${(props) => rem(props.width || '30px')};
	height: ${(props) => rem(props.height || '30px')};
	img {
		max-width: 100%;
		display: block;
	}
`;
