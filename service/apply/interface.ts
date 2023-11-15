// 참가 신청(알림)
// export interface reqDeleteMatchingListApiData {
// 	matching_id: string;
// }

// 참가 신청 취소(매칭 확정된 경기일 경우, 경기 매칭 확정 상태 변경 및 패널티 부여, 알림)// 매칭 리스트 조회
// export interface reqGetMatchingListApiData {
// 	page: number;
// 	size: number;
// }

// 참가 신청 수락(알림)

export interface reqApplyMatchesApiData {
	matching_id: string;
	appliedList: []; // 신청 인원 리스트
	confirmedList: []; // 참여 인원 리스트
}
