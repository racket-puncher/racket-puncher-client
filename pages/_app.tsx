import React from 'react';
import '../styles/css/reset.css';

function MyApp({ Component, pageProps }: any) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
