interface OptionType {
	value: string;
	label: string;
}

export const genderOptions: OptionType[] = [
	{ value: 'MALE', label: '남자' },
	{ value: 'FEMALE', label: '여자' },
];

export const ageOptions: OptionType[] = [
	{ value: 'TWENTIES', label: '20대' },
	{ value: 'THIRTIES', label: '30대' },
	{ value: 'FORTIES', label: '40대' },
	{ value: 'SENIOR', label: '50대이상' },
];
export const NTRPOptions: OptionType[] = [
	{ value: 'DEVELOPMENT', label: 'Development' },
	{ value: 'BEGINNER', label: 'Beginner' },
	{ value: 'INTERMEDIATE', label: 'Intermediate' },
	{ value: 'ADVANCE', label: 'Advance' },
	{ value: 'PRO', label: 'Pro' },
];

export const matchingTypesOptions: OptionType[] = [
	{ value: 'SINGLE', label: '단식' },
	{ value: 'DOUBLE', label: '복식' },
	{ value: 'MIXED_DOUBLE', label: '혼성 복식' },
	{ value: 'OTHER', label: '기타' },
];
