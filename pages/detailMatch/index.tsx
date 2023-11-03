import styled from 'styled-components';
import { RoundButton } from '../../styles/ts/components/buttons';
import React from 'react';

export default function DetailMatching() {
	return (
		<>
			<DetailMatchingContainer>
				<ProfileContainer></ProfileContainer>

				<ControlBox></ControlBox>

				<ContentContainer></ContentContainer>

				<ButtonBox>
					<RoundButton>모집 현황</RoundButton>
				</ButtonBox>
			</DetailMatchingContainer>
		</>
	);
}

const DetailMatchingContainer = styled.div``;
const ProfileContainer = styled.div``;
const ControlBox = styled.div``;
const ContentContainer = styled.div``;
const ButtonBox = styled.div`
	margin-top: 30px;
	margin-bottom: 50px;
`;
