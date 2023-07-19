export interface CamelizeType {
	(str: string, sep: string): string;
}

export interface ToArrayType<T> {
	(lsit: ArrayLike<T>, sep?: T): T[];
}
