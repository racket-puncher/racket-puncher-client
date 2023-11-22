import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as process from 'process';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						type='text/javascript'
						src={
							'//dapi.kakao.com/v2/maps/sdk.js?appkey=' +
							`${process.env.KAKAO_MAPS_APP_KEY}` +
							'&libraries=services'
						}></script>
					<meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
