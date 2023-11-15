import Document, { Head, Html, Main, NextScript } from 'next/document';

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
							'&autoload=false'
						}></script>
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
