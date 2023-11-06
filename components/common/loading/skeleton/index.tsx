import React from 'react';
import { Skeleton } from 'antd';

export default function SkeletonUI() {
	return (
		<>
			<Skeleton avatar paragraph={{ rows: 3 }} />
		</>
	);
}
