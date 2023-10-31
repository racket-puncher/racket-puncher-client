import styled from 'styled-components';
import { rem } from 'polished';
import { Tabs as AntdTabs } from 'antd';

export const CustomTab = styled(AntdTabs)`
	width: 100% !important;
	font-size: inherit !important;
	line-height: 1 !important;
	color: inherit !important;
	div.ant-tabs-nav {
		margin: 0 !important;
		background-color: #f5f5f5 !important;
		padding: ${rem('10px')} ${rem('20px')} !important;
		border-radius: 50px !important;
		&::before {
			display: none !important;
		}
		div.ant-tabs-nav-wrap {
			display: block !important;
			&::before {
				display: none !important;
			}
			&::after {
				display: none !important;
			}
			div.ant-tabs-nav-list {
				display: flex !important;
				div.ant-tabs-tab {
					width: 260px; !important;
					display: block !important;
					padding: 11px 0 !important;
					font-size: inherit !important;
					margin: 0 !important;
					text-align: center !important;
					font-size: 18px; !important;
					font-family: Pretendard-Regular;
					color: #999;
					&.ant-tabs-tab-active {
						width: 260px;
						text-align: center;
						background: #ffff;
						padding: 11px 0;
						border-radius: 50px;
						border: 1px solid #84a840;
						color: #84a840!important;
						.ant-tabs-tab-btn {
							color: #84a840;
						}
					}
				}
				div.ant-tabs-ink-bar {
					display: none !important;
				}
			}
		}
		div.ant-tabs-nav-operations {
			display: none !important;
		}
	}
`;
