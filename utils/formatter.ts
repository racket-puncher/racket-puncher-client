import moment from 'moment';

// 날짜 포맷터
export const dateFormatter = (date: Date) => {
	return moment(date).format('YYYY/MM/DD');
};

// 시간 포매터
export const timeFormatter = (time: Date) => {
	const hour = time.getHours() > 9 ? time.getHours() + '' : '0' + time.getHours() + '';
	const minute = time.getMinutes() > 9 ? time.getMinutes() + '' : '0' + time.getMinutes() + '';

	return hour + ':' + minute;
};

// 휴대폰번호 포맷터
export const onlyNumber = (value: string) => {
	return value.replace(/[^0-9]/g, '');
};
