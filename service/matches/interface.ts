// 매칭글 게시
import { array } from 'yup';

export interface reqRegMatchingApiData {
	title: string; // 제목
	ageGroup: string; // 연령대
	matchingType: string; // 경기 유형
	ntrp: string; // NTRP (e.g. developement)

	location: string; // 장소 (문자열)
	lat: string; // 위도
	len: string; // 경도

	matchingDate: string; // 경기 날짜
	matchingStartTime: string; // 경기 시작 시간
	matchingEndTime: string; // 경기 종료 시간
	recruitDueDate: string; // 모집 종료 일(yyyy-mm-dd)
	recruitDueTime: string; // 모집 종료 시간(hh)
	recruitNum: number; // 모집 인원

	cost: number; // 대여비
	isReserved: boolean; // 예약 여부

	locationImg: string; // 구장 이미지
	content: string; // 본문
}

// 매칭글 상세 보기
export interface reqGetDetailMatchingListApiData {
	matchingId: number;
	matching_id: string;
}

// 매칭글 수정(알림)
export interface reqModifyMatchingApiData {
	title: string; // 제목
	ageGroup: string; // 연령대
	matchingType: string; // 경기 유형
	ntrp: string; // 숙련도 (e.g. developer)

	location: string; // 장소 (문자열)
	lat: string; // 위도
	len: string; // 경도

	matchingDate: string; // 경기 날짜
	matchingStartTime: string; // 경기 시작 시간
	matchingEndTime: string; // 경기 종료 시간
	recruitDueDate: string; // 모집 종료 시간

	cost: number; // 대여비
	isReserved: boolean; // 예약 여부

	locationImg: string; // 구장 이미지
	content: string; // 본문
	matching_id: string;
}

// 매칭글 삭제(알림)
export interface reqDeleteMatchingListApiData {
	matching_id: string;
}

// 매칭 리스트 조회
export interface reqGetMatchingListApiData {
	params: {
		page: number;
		size: number;
		sort: string;
	};
	body: {
		location: {
			lat: number;
			lon: number;
		};
		filters: {
			date: string;
			regions: object;
			matchingTypes: object;
			ageGroups: object;
			ntrps: object;
		};
	};
}

// 매칭별 신청 현황 조회
export interface reqMatchingApplyStateApiData {
	matching_id: string;
}

// 주소 검색
export interface reqSearchAddressApiData {
	keyword: string; // 사용자가 검색할 때 입력하는 키워드
}
