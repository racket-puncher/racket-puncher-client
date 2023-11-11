import * as process from 'process';

export const prefix =
	process.env.NODE_ENV === 'production'
		? 'https://racket-puncher.github.io/racket-puncher-client'
		: '';
