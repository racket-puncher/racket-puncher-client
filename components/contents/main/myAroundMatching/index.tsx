import styled from 'styled-components';
import { useEffect } from 'react';
import { GrayLine } from '../../../../styles/ts/components/box';

export default function MyAroundMatching() {
	useEffect(() => {
		const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 3,
		};

		const map = new kakao.maps.Map(container, options);
	}, []);
	return (
		<>
			<MyAroundMatchingContainer>
				<MapBox>
					<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
				</MapBox>
			</MyAroundMatchingContainer>
		</>
	);
}

const MyAroundMatchingContainer = styled.div``;

const MapBox = styled.div`
	margin: 20px 0;
`;
