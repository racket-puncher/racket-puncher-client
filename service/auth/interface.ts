// 회원가입
export interface reqSignupApiData {
	email: string;
	password: string;
	nickname: string;
	roles: object;
	ageGroup: string;
	gender: string;
	address: string;
	zipCode: string;
	ntrp: string;
	phoneNumber: string;
	profileImg: string;
}

// 로그인
export interface reqLoginApiData {
	email: string;
	password: string;
}

// 회원가입 프로필 이미지
export interface reqUploadImgSignupApiData {
	imageFile: any;
}

// 카카오톡 회원가입
export interface reqKakaoSignupApiData {
	email: string;
}

// 카카오톡 로그인
export interface reqKakaoLoginApiData {
	authType: string;
	oauthToken: string;
}

// 로그아웃
export interface reqLogoutApiData {
	email: string;
	accessToken: string;
}

// 회원탈퇴
export interface reqDeleteUserApiData {
	email: string;
	password: string;
}

// 닉네임 중복 체크
export interface reqCheckNicknameApiData {
	nickname: string;
}

// 핸드폰 인증
export interface reqPhoneVerifyApiData {
	phone_number: string;
}

// 이메일 인증 링크 전송
export interface reqEmailVerifyApiData {
	email: string;
	password: string;
}

// 아이디 찾기
export interface reqFindIdApiData {
	email: string;
	password: string;
}

// 비밀번호 찾기 (초기화)
export interface reqFindPwdApiData {
	email: string;
	password: string;
}
