import http from '../../lib/http/httpInterceptor';
import { reqGetMatchingListApiData } from './interface';

const getMatchingList = (data: reqGetMatchingListApiData) => {
	return http.get('/api/matches/list', {
		params: {
			page: data.page,
			size: data.size,
		},
	});
};

const MatchingService = {
	getMatchingList,
};

export default MatchingService;
