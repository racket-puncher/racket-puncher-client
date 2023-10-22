import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

export default function Main() {
	return (
		<>
			<div>main</div>
			<FontTest>gdg</FontTest>
		</>
	);
}

const FontTest = styled.p`
	font-size: ${rem('42px')};
`;
