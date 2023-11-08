import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						type='text/javascript'
						src='//dapi.kakao.com/v2/maps/sdk.js?appkey=20bd45f114aff9ec8fee730fe2453f5c'></script>
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
