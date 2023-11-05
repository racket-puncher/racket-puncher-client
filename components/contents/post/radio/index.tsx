import styled from 'styled-components';
import { rem } from 'polished';
import { Radio as AntdRadio, ConfigProvider } from 'antd';
import {
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PrimaryColor,
} from '../../../../styles/ts/common';

export default function ButtonStyleRadio() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Radio: {
						borderRadius: 5,
						buttonBg: `${InputBoxColor}`,
						buttonCheckedBg: `${InputBoxColor}`,
						buttonColor: `${InputLabelColor}`,
						colorPrimary: `${PrimaryColor}`,
						colorPrimaryHover: `${PrimaryColor}`,
						colorPrimaryActive: `${PrimaryColor}`,
					},
				},
			}}>
			<RadioGroup defaultValue='x' size='large'>
				<RadioButton value='o'>예약 완료</RadioButton>
				<RadioButton value='x'>예약 X</RadioButton>
			</RadioGroup>
		</ConfigProvider>
	);
}

const RadioGroup = styled(AntdRadio.Group)`
	display: flex;
	flex-direction: row;
	gap: 20px;

	& :not(:first-child)::before {
		width: 0px;
		height: 0px;
	}
`;

const RadioButton = styled(AntdRadio.Button)`
	width: 100%;
	min-height: ${rem('50px')};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	text-align: center;
`;
