import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MatchingCard from '../card';
import { v4 as uuidv4 } from 'uuid';
import { prefix } from '../../../../constants/prefix';

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
	const [map, setMap] = useState(null);
	const [infowindows, setInfowindows] = useState([]);
	const [selectedMarker, setSelectedMarker] = useState(null);

	useEffect(() => {
		const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450705, 126.570677),
			level: 3,
		};

		const kakaoMap = new kakao.maps.Map(container, options);
		setMap(kakaoMap);

		const customMarkerImageUrl = `${prefix}/images/map-pin.png`;
		const imageSize = new kakao.maps.Size(28, 40);
		// 마커의 끝점을 기준으로 이미지가 표시
		const imageOption = { offset: new kakao.maps.Point(27, 69) };

		// 커스텀 마커 이미지 생성
		const customMarkerImage = new kakao.maps.MarkerImage(
			customMarkerImageUrl,
			imageSize,
			imageOption
		);

		// 내위치 핀찍기 ----------------------------------------------------------
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;
					kakaoMap.setCenter(new kakao.maps.LatLng(lat, lng));

					const userMarker = new kakao.maps.Marker({
						map: kakaoMap,
						position: new kakao.maps.LatLng(lat, lng),
						image: customMarkerImage,
					});

					const userInfowindow = new kakao.maps.InfoWindow({
						content: '<div style="padding:5px;">내 위치</div>',
					});
					userInfowindow.open(kakaoMap, userMarker);
					infowindows.push(userInfowindow);
				},
				(error) => {
					console.error('error: ' + error.message);
				}
			);
		} else {
			console.log('이 브라우저에서는 지원되지 않음');
		}

		// infoWindow ----------------------------------------------------------
		const newInfowindows = positions.map((position) => {
			const marker = new kakao.maps.Marker({
				map: kakaoMap,
				position: new kakao.maps.LatLng(position.lat, position.lng),
				image: customMarkerImage,
			});

			const infowindow = new kakao.maps.InfoWindow({
				content: position.content,
				removable: true,
			});

			kakao.maps.event.addListener(marker, 'click', () => {
				infowindows.forEach((iw) => iw.close());
				infowindow.open(kakaoMap, marker);
				setSelectedMarker(marker); // 선택된 마커 업데이트
				kakaoMap.setCenter(marker.getPosition());
			});

			return infowindow;
		});

		setInfowindows([...infowindows, ...newInfowindows]);
	}, []);

	const handleButtonClick = (position, index) => {
		if (map) {
			const markerPosition = new kakao.maps.LatLng(position.lat, position.lng);
			map.setCenter(markerPosition);

			infowindows.forEach((iw, idx) => {
				if (index === idx) {
					iw.open(map, selectedMarker);
				} else {
					iw.close();
				}
			});
		}
	};

	return (
		<>
			<MyAroundMatchingContainer>
				<MapBox>
					<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
				</MapBox>
				{positions.map((position, index) => (
					<div key={uuidv4()}>
						<MatchingCard onClick={() => handleButtonClick(position, index)}></MatchingCard>
					</div>
				))}
			</MyAroundMatchingContainer>
		</>
	);
}

const MyAroundMatchingContainer = styled.div``;

const MapBox = styled.div`
	margin: 20px 0;
`;
