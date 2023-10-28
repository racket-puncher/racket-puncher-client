import moment from 'moment';

// 날짜 포맷터
export const dateFomatter = (date: string) => {
	return moment(date).format('YYYY/MM/DD');
};

// 휴대폰번호 포맷터
export const onlyNumber = (value: string) => {
	return value.replace(/[^0-9]/g, '');
};
