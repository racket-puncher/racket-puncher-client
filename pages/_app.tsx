import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import LayoutContainer from '../components/layouts';
import '../styles/css/reset.css';
import '../styles/scss/font-family.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: any) {
	const router = useRouter();

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

	useEffect(() => {
		if (router.pathname === '/') {
			router.replace('/main');
		}
	}, [router]);

	return (
		<RecoilRoot>
			<LayoutContainer>
				<Component {...pageProps} />
			</LayoutContainer>
		</RecoilRoot>
	);
}

export default MyApp;
