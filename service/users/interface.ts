// 매칭 리스트 조회
export interface reqGetUserInfoApiData {
	userId: string;
}

export interface reqPostUserProfileImg {
	imageFile: any;
}

export interface reqPatchMyProfileInfo {
	nickname: string; // 닉네임
	// password: string; // 비밀번호
	email: string; // 이메일
	// phoneNumber: string; // 전화번호
	address: string; // 주소
	zipCode: string; // 우편번호
	ntrp: string; // NTRP
	// gender: string; // 성별
	// ageGroup: string; // 연령대
	profileImg: string;
}

export interface reqPostReportUser {
	title: string; // 제목
	content: string; // 내용
	writerId: string; // 신고자 ID
	reportedId: string; // 피신고자 ID
}
