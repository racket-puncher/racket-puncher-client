import styled from 'styled-components';
import { PageMainTitle } from '../../../styles/ts/components/titles';
import React from 'react';
import { rem } from 'polished';

import { FontSizeLg } from '../../../styles/ts/common';
import { RoundButton } from '../../../styles/ts/components/buttons';
import useRouterHook from '../../../utils/useRouterHook';

export default function FindIDResult() {
	const { moveToBack } = useRouterHook();
	return (
		<>
			<FindIDResultContainer>
				<PageMainTitle>아이디 찾기</PageMainTitle>
				<FoundIdContainer>가입 정보가 없습니다.</FoundIdContainer>

				<ButtonBox>
					<RoundButton colorstyle={'is-green'} onClick={moveToBack}>
						돌아가기
					</RoundButton>
				</ButtonBox>
			</FindIDResultContainer>
		</>
	);
}

const FindIDResultContainer = styled.div`
	margin-top: 50px;
`;

const FoundIdContainer = styled.div`
	margin: ${rem('100px')} auto;
	text-align: center;
	font-size: ${FontSizeLg};
`;

const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
