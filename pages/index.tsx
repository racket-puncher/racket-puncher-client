import React from 'react';
import styled from 'styled-components';
import * as B from '../styles/ts/common';
import { rem } from 'polished';

export default function MainPage() {
	return (
		<>
			<Test>ddd</Test>
		</>
	);
}

const Test = styled.p`
	color: ${B.MainColor};
	font-size: ${rem('18px')};
`;
