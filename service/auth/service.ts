import http from '../../lib/http/httpInterceptor';
import httpFile from '../../lib/http/httpFileInterceptor';
import {
	reqCheckIdApiData,
	reqDeleteUserApiData,
	reqFindIdApiData,
	reqFindPwdApiData,
	reqKakaoLoginApiData,
	reqKakaoSignupApiData,
	reqLoginApiData,
	reqLogoutApiData,
	reqPhoneVerifyApiData,
	reqSignupApiData,
	reqUploadImgSignupApiData,
} from './interface';

// 회원가입
const signup = (data: reqSignupApiData) => {
	return http.post('/api/auth/signup', data);
};

// 로그인
const login = (data: reqLoginApiData) => {
	return http.post('/api/auth/signin', data);
};

// 회원가입 프로필 이미지
const uploadImgSignup = (data: any) => {
	console.log(data);
	return httpFile.post('/api/auth/upload-image', data);
};

// 카카오톡 회원가입
const kakaoSignup = (data: reqKakaoSignupApiData) => {
	return http.post('/api/auth/kakao/sign-up', data);
};

// 카카오톡 로그인
const kakaoLogin = (data: reqKakaoLoginApiData) => {
	return http.post('/api/auth/kakao/callback', data);
};

// 로그아웃
const logout = (data: reqLogoutApiData) => {
	return http.post('/api/auth/sign-out', data);
};

// 회원탈퇴
// const deleteUser = (data: reqDeleteUserApiData) => {
// 	return http.delete('/api/auth/quit', data);
// };

// 닉네임 중복 체크
const checkNickname = (data: reqCheckIdApiData) => {
	return http.post('/api/auth/check-email', data);
};

// 핸드폰 인증
const phoneVerify = (data: reqPhoneVerifyApiData) => {
	return http.post('/api/auth/phone-verify', data);
};

// 이메일 인증 링크 전송
const emailVerify = (data: reqPhoneVerifyApiData) => {
	return http.post('/api/auth/email-verify', data);
};

// 아이디 찾기
const findId = (data: reqFindIdApiData) => {
	return http.post('/api/auth/id-find', data);
};

// 비밀번호 찾기 (초기화)
const findPwd = (data: reqFindPwdApiData) => {
	return http.post('/api/auth/password-reset', data);
};

const AuthService = {
	signup,
	login,
	uploadImgSignup,
	kakaoSignup,
	kakaoLogin,
	logout,
	// deleteUser,
	checkNickname,
	phoneVerify,
	emailVerify,
	findId,
	findPwd,
};

export default AuthService;
