// 매칭 리스트 조회
export interface reqGetUserInfoApiData {
	userId: string;
}

export interface reqPostUserProfileImg {
	params: {
		userId: any;
		imagefile: any;
	};
}

export interface reqGetMyHostedList {
	params: {
		userId: string;
	};
}

export interface reqGetMyAppliedList {
	params: {
		userId: any;
	};
}

export interface reqPatchMyProfileInfo {
	params: {
		userId: any;
	};
	body: {
		nickname?: string; // 닉네임
		password?: string; // 비밀번호
		email?: string; // 이메일
		phoneNumber?: string; // 전화번호
		address?: string; // 주소
		zipCode?: string; // 우편번호
		ntrp?: string; // NTRP
		gender?: string; // 성별
		ageGroup?: string; // 연령대
		profileImg?: string;
	};
}

export interface reqPostReportUser {
	title: string; // 제목
	content: string; // 내용
	reportingUserId: string; // 신고자 ID
	reportedUserId: string; // 피신고자 ID
}
