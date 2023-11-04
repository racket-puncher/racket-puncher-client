import styled from 'styled-components';
import { useEffect } from 'react';

const positions = [
	{
		title: '카카오',
		content: '<div>카카오</div>',
		lat: 33.450705,
		lng: 126.570677,
	},
	{
		title: '생태연못',
		content: '<div>생태연못</div>',
		lat: 33.450936,
		lng: 126.569477,
	},
	{
		title: '텃밭',
		content: '<div>텃밭</div>',
		lat: 33.450879,
		lng: 126.56994,
	},
	{
		title: '근린공원',
		content: '<div>근린공원</div>',
		lat: 33.451393,
		lng: 126.570738,
	},
];

export default function MyAroundMatching() {
	// const map = new kakao.maps.Map(container, options);

	// const onClickMoveMap = (item: any) => {};
	useEffect(() => {
		const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 3,
		};

		const map = new kakao.maps.Map(container, options);

		for (let i = 0; i < positions.length; i++) {
			const marker = new kakao.maps.Marker({
				map, // 마커를 표시할 지도
				position: new kakao.maps.LatLng(positions[i].lat, positions[i].lng),
				title: positions[i].title,
			});
			const infowindow = new kakao.maps.InfoWindow({
				content: positions[i].content, // 인포윈도우에 표시할 내용
			});
			kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
			// kakao.maps.event.addListener(marker, 'click', makeOutListener(infowindow));
		}

		// 인포윈도우 표시
		function makeOverListener(map, marker, infowindow) {
			return function () {
				infowindow.open(map, marker);
			};
		}
	}, []);
	return (
		<>
			<MyAroundMatchingContainer>
				<MapBox>
					<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
				</MapBox>
				{positions.map((item) => {
					return (
						<>
							<button>{item.title}</button>
						</>
					);
				})}
			</MyAroundMatchingContainer>
		</>
	);
}

const MyAroundMatchingContainer = styled.div``;

const MapBox = styled.div`
	margin: 20px 0;
`;
