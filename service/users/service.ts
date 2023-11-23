import http from '../../lib/http/httpInterceptor';
import httpFile from 'lib/http/httpFileInterceptor';

import {
	reqGetUserInfoApiData,
	reqGetMyHostedList,
	reqGetMyAppliedList,
	reqPostUserProfileImg,
	reqPatchMyProfileInfo,
	reqPostReportUser,
} from './interface';

// 회원정보 보기
const getUserInfo = (data: string) => {
	return http.get(`/api/users/profile/${data}`, { params: { userId: data } });
};

// 내 프로필 정보 보기
const getMyProfileInfo = (data: string) => {
	return http.get(`/api/users/my-page/${data}`, { params: { userId: data } });
};

// 등록한 매칭 리스트
const getMyHostedMatchingList = (data: string) => {
	return http.get(`/api/users/my-page/hosted/${data}`, { params: { userId: data } });
};

// 신청한 매칭 리스트
const getMyAppliedMatchingList = (data: string) => {
	return http.get(`/api/users/my-page/hosted/${data}`, { params: { userId: data } });
};

// 프로필 이미지 올리기
const postProfileImg = (data: reqPostUserProfileImg) => {
	return http.post(`/api/users/${data.params.userId}/upload-profile-image`, null, {
		params: data.params,
	});
};

// 내 프로필 수정
const patchMyProfileInfo = (data: reqPatchMyProfileInfo) => {
	return http.patch(`/api/users/my-page/modify/${data.params.userId}`, data.body, {
		params: data.params,
	});
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
