import http from '../../lib/http/httpInterceptor';
import { reqApplyMatchesApiData } from './interface';

// 참가 신청(알림)
// const regMatchingData = (data: reqRegMatchingApiData) => {
// 	return http.post(`/api/apply/matches/${data}`);
// };

// 참가 신청 취소(매칭 확정된 경기일 경우, 경기 매칭 확정 상태 변경 및 패널티 부여, 알림)
// const getDetailMatchingList = (data: reqGetDetailMatchingListApiData) => {
// 	return http.delete(`/api/apply/${data}`);
// };

// 참가 신청 수락(알림)
const applyMatches = (data: reqApplyMatchesApiData) => {
	return http.patch(`/api/apply/matches/${data}`);
};

const ApplyService = {
	applyMatches,
};

export default ApplyService;
