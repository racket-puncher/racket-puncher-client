import http from '../../lib/http/httpInterceptor';
import { reqGetUserInfoApiData } from './interface';

const getUserInfo = (data: reqGetUserInfoApiData) => {
	return http.post(`/api/users/profile/${data}`);
};

const usersService = {
	getUserInfo,
};

export default usersService;
