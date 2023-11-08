import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MatchingCard from '../card';
import { v4 as uuidv4 } from 'uuid';

const positions = [
	{
		content: '<div>카카오</div>',
		title: '카카오',
		lat: 33.450705,
		lng: 126.570677,
	},
	{
		content: '<div>생태연못</div>',
		title: '생태연못',
		lat: 33.450936,
		lng: 126.569477,
	},
	{
		content: '<div>텃밭</div>',
		title: '텃밭',
		lat: 33.450879,
		lng: 126.56994,
	},
	{
		content: '<div>근린공원</div>',
		title: '근린공원',
		lat: 33.451393,
		lng: 126.570738,
	},
];

export default function MyAroundMatching() {
	const [map, setMap] = useState(null); // map 상태 추가
	const [infowindows, setInfowindows] = useState([]); // 인포윈도우 목록 상태 추가
	const [selectedMarker, setSelectedMarker] = useState(null); // 선택한 마커 상태 추가

	useEffect(() => {
		const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 3,
		};

		const kakaoMap = new kakao.maps.Map(container, options);
		setMap(kakaoMap); // map 상태 설정

		const infowindowsArray = positions.map((position) => {
			const marker = new kakao.maps.Marker({
				map: kakaoMap,
				position: new kakao.maps.LatLng(position.lat, position.lng),
			});

			// 마커에 인포윈도우(정보창) 추가
			const infowindow = new kakao.maps.InfoWindow({
				content: position.content,
				removable: true,
			});

			kakao.maps.event.addListener(marker, 'click', function () {
				if (selectedMarker === marker) {
					infowindow.open(kakaoMap, marker);
				} else {
					// 선택한 마커가 아닌 경우, 다른 인포윈도우를 닫고 새로운 마커의 인포윈도우를 열기
					infowindowsArray.forEach((iw) => iw.close());
					setSelectedMarker(marker);
					infowindow.open(kakaoMap, marker);
				}

				// 클릭한 요소를 가운데로 이동
				kakaoMap.setCenter(marker.getPosition());
			});

			return infowindow;
		});

		// 인포윈도우 목록 상태 업데이트
		setInfowindows(infowindowsArray);
	}, []);

	const handleButtonClick = (position, index) => {
		if (map) {
			const marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(position.lat, position.lng),
			});
			const infowindow = infowindows[index];

			if (selectedMarker === marker) {
				infowindow.open(map, marker);
			} else {
				infowindows.forEach((iw) => iw.close());
				setSelectedMarker(marker);
				infowindow.open(map, marker);
			}

			map.setCenter(marker.getPosition());
		}
	};

	return (
		<>
			<MyAroundMatchingContainer>
				<MapBox>
					<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
				</MapBox>
				{positions.map((element1, index) => {
					return (
						<div key={uuidv4()}>
							<MatchingCard onClick={() => handleButtonClick(element1, index)}></MatchingCard>
						</div>
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
