import styled from 'styled-components';
import React from 'react';
import { Radio as AntdRadio } from 'antd';
import { rem } from 'polished';

export default function FilteringModal() {
	return (
		<>
			<FilteringModalContainer>
				<CustomRadio.Group defaultValue='register' size='large'>
					<CustomRadio.Button value='register'>등록순</CustomRadio.Button>
					<CustomRadio.Button value='distance'>거리순</CustomRadio.Button>
					<CustomRadio.Button value='deadLine'>모집임박순</CustomRadio.Button>
				</CustomRadio.Group>
			</FilteringModalContainer>
		</>
	);
}

const FilteringModalContainer = styled.div``;

const CustomRadio = styled(AntdRadio)`
	div.ant-radio-group {
		width: ${rem('520px')};
		margin: 0 auto;
	}
`;
