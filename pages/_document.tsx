import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						type='text/javascript'
						src='//dapi.kakao.com/v2/maps/sdk.js?appkey=09fa9b84bd000d81c733f70b178723aa'></script>
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
