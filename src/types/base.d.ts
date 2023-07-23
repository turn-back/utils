/**
 * @param {str:T}
 * @param {sep?:T}
 * @returns {T}
 */
export interface CommonFunType<T> {
	(str: T, sep?: T): T;
}

export interface ToArrayType<T> {
	(list: ArrayLike<T>, sep?: T): T[];
}

export interface IsArrayLikeType {
	(obj: any): boolean;
}
