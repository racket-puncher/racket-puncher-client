import React from 'react';
import '../styles/css/reset.css';
import { RecoilRoot } from 'recoil';

import LayoutContainer from '../components/layouts';

function MyApp({ Component, pageProps }: any) {
	return (
		<>
			<RecoilRoot>
				<LayoutContainer>
					<Component {...pageProps} />
				</LayoutContainer>
			</RecoilRoot>
		</>
	);
}

export default MyApp;
