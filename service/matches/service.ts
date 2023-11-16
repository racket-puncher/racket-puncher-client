import http from '../../lib/http/httpInterceptor';
import {
	reqDeleteMatchingListApiData,
	reqGetDetailMatchingListApiData,
	reqGetMatchingListApiData,
	reqMatchingApplyStateApiData,
	reqModifyMatchingApiData,
	reqRegMatchingApiData,
	reqSearchAddressApiData,
} from './interface';

// 매칭글 게시
const regMatchingData = (data: reqRegMatchingApiData) => {
	return http.post('/api/matches', data);
};

// 매칭글 상세 보기
const getDetailMatchingList = (data: reqGetDetailMatchingListApiData) => {
	return http.get(`/api/matches/${data}`);
};

// 매칭글 수정(알림)
const modifyMatchingList = (data: reqModifyMatchingApiData) => {
	return http.patch(`/api/matches/${data}`);
};

// 매칭글 삭제(알림)
const deleteMatchingList = (data: reqDeleteMatchingListApiData) => {
	return http.delete(`/api/matches/${data}`);
};

// 매칭리스트 조회
const getMatchingList = (data: reqGetMatchingListApiData) => {
	return http.post('/api/matches/list', data.body, {
		params: data.params,
	});
};

// 지도
// const getMatchingApplyState = (data: reqMatchingApplyStateApiData) => {
// 	return http.get(`/api/matches/${data}/apply`);
// };

// 매칭별 신청 현황 조회
const getMatchingApplyState = (data: reqMatchingApplyStateApiData) => {
	return http.get(`/api/matches/${data}/apply`);
};

// 주소 검색
const searchAddress = (data: any) => {
	return http.get('/api/matches/address', {
		params: {
			keyword: data.keyword,
		},
	});
};

const MatchesService = {
	regMatchingData,
	getDetailMatchingList,
	getMatchingList,
	modifyMatchingList,
	deleteMatchingList,
	getMatchingApplyState,
	searchAddress,
};

export default MatchesService;
