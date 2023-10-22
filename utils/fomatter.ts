import moment from 'moment';

// 날짜 포맷터
export const dateFomatter = (date: string) => {
	return moment(date).format('YYYY/MM/DD');
};
