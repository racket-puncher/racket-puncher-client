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
	{ value: 'DEVELOPMENT', label: 'Development (1.0 ~ 2.0)' },
	{ value: 'BEGINNER', label: 'Beginner (2.5 ~ 3.5)' },
	{ value: 'INTERMEDIATE', label: 'Intermediate (4.0 ~ 4.5)' },
	{ value: 'ADVANCED', label: 'Advanced (5.0 ~ 5.5)' },
	{ value: 'PRO', label: 'Pro (6.0 ~ 7.0)' },
];

export const matchingTypesOptions: OptionType[] = [
	{ value: 'SINGLE', label: '단식' },
	{ value: 'DOUBLE', label: '복식' },
	{ value: 'MIXED_DOUBLE', label: '혼성 복식' },
	{ value: 'OTHER', label: '기타' },
];
