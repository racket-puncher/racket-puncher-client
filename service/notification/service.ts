import http from '../../lib/http/httpInterceptor';
import { reqSubscribeNotificationData } from './interface';

// 알림 구독 요청
const subscribeNotification = (data: reqSubscribeNotificationData) => {
	return http.post('/api/notification/subscribe', data);
};

const NotificationService = {
	subscribeNotification,
};

export default NotificationService;
