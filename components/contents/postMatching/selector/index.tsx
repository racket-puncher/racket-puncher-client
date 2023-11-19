import React, { useEffect, useState } from 'react';
import { CustomSelect } from 'styles/ts/components/select';

interface ISelectorProps {
	idString: string;
	options: Array<object>;
	value?: string | number;
	onChangeHandler: (e: string | number) => void;
}

export default function Selector(props: ISelectorProps) {
	const { idString, options, value, onChangeHandler } = props;

	// useEffect(() => {
	// 	setValue(getValue(idString));
	// }, [value]);
	return <CustomSelect id={idString} value={value} options={options} onChange={onChangeHandler} />;
}
