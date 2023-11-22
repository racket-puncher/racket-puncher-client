import React, { useEffect, useState } from 'react';
import { CustomSelect } from 'styles/ts/components/select';

interface ISelectorProps {
	idString: string;
	options?: Array<object>;
	value?: string | number;
	defaultValue?: string | number;
	onChangeHandler?: (e: string | number) => void;
	disabled?: boolean;
}

export default function Selector(props: ISelectorProps) {
	const { idString, options, value, disabled, defaultValue, onChangeHandler } = props;
	return (
		<>
			<CustomSelect
				id={idString}
				value={value}
				options={options}
				defaultValue={defaultValue}
				onChange={onChangeHandler}
				disabled={disabled}
			/>
		</>
	);
}
