import http from '../../lib/http/httpInterceptor';
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
} from './interface';

// 회원가입
const signup = (data: reqSignupApiData) => {
	return http.post('/api/auth/signup', data);
};

// 로그인
const login = (data: reqLoginApiData) => {
	return http.post('/api/auth/signin', data);
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

// 아이디 중복 체크
const checkId = (data: reqCheckIdApiData) => {
	return http.post('/api/auth/id-check', data);
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
	kakaoSignup,
	kakaoLogin,
	logout,
	// deleteUser,
	checkId,
	phoneVerify,
	emailVerify,
	findId,
	findPwd,
};

export default AuthService;
