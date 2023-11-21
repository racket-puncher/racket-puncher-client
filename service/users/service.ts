import http from '../../lib/http/httpInterceptor';
import {
	reqGetUserInfoApiData,
	reqPostUserProfileImg,
	reqPatchMyProfileInfo,
	reqPostReportUser,
} from './interface';

// 회원정보 보기
const getUserInfo = (userId: string) => {
	return http.get(`/api/users/profile/${userId}`);
};

// 내 프로필 정보 보기
const getMyProfileInfo = (userId: string) => {
	return http.get(`/api/users/my-page/${userId}`);
};

// 등록한 매칭 리스트
const getMyHostedMatchingList = (userId: string) => {
	return http.get(`/api/users/my-page/hosted/${userId}`);
};

// 신청한 매칭 리스트
const getMyAppliedMatchingList = (userId: string) => {
	return http.get(`/api/users/my-page/apply/${userId}`);
};

// 프로필 이미지 올리기
const postProfileImg = (userId: string, data: reqPostUserProfileImg) => {
	return http.post(`/api/users/${userId}/upload-profile-image`, data);
};

// 내 프로필 수정
const patchMyProfileInfo = (userId: string, data: reqPatchMyProfileInfo) => {
	return http.post(`/api/users/my-page/modify/${userId}`, data);
};

// 회원 신고
const postReportUser = (data: reqPostReportUser) => {
	return http.post('/api/users/report', data);
};

// 신고내역조회(관리자)

// 알림 조회
const getAlarmList = (userId: string) => {
	return http.get(`api/user/notification/${userId}`);
};

// 알림 삭제
const deleteAlarmList = (userId: string, notificationId: string) => {
	return http.delete(`api/user/notification/${userId}/${notificationId}`);
};

// 플레이어 평가

// 패널치 부여(관리자)

const usersService = {
	getUserInfo,
	getMyProfileInfo,
	getMyHostedMatchingList,
	getMyAppliedMatchingList,
	postProfileImg,
	patchMyProfileInfo,
	postReportUser,
	getAlarmList,
	deleteAlarmList,
};

export default usersService;
