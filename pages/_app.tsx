import React, { useEffect } from 'react';
import '../styles/css/reset.css';
import '../styles/scss/font-family.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RecoilRoot } from 'recoil';

import LayoutContainer from '../components/layouts';

function MyApp({ Component, pageProps }: any) {
	useEffect(() => {
		const originalError = console.error;
		console.error = (message) => {
			if (message?.includes('ReactDOM.unstable_renderSubtreeIntoContainer()')) {
				return;
			}
			// 기본 동작 실행
			originalError(message);
		};
	}, []);

	return (
		<RecoilRoot>
			<LayoutContainer>
				<Component {...pageProps} />
			</LayoutContainer>
		</RecoilRoot>
	);
}

export default MyApp;
