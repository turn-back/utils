export interface CamelizeType {
	(str: string, sep: string): string;
}

export interface ToArrayType<T> {
	(list: ArrayLike<T>, sep?: T): T[];
}

export interface IsArrayLikeType {
	(obj: any): boolean;
}
