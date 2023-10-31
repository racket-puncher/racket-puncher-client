import styled from 'styled-components';
import React from 'react';
import { Radio } from 'antd';

export default function FilteringModal() {
	return (
		<>
			<FilteringModalContainer>
				<Radio.Group defaultValue='a' size='large'>
					<Radio.Button value='a'>Hangzhou</Radio.Button>
					<Radio.Button value='b'>Shanghai</Radio.Button>
					<Radio.Button value='c'>Beijing</Radio.Button>
				</Radio.Group>
			</FilteringModalContainer>
		</>
	);
}

const FilteringModalContainer = styled.div``;
