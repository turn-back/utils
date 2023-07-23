import { CommonFunType, ToArrayType, IsArrayLikeType } from "../types/base";
/**
 * 横线分隔字符串转驼峰
 * @param {string} str eg. user-id => userId
 * @param {string} sep 分隔符，默认:短横线 -，也可配置下划线_
 * @returns {string}
 */

export const camelize: CommonFunType<string> = (str, sep) => {
	const camelizeRE = /-(\w)/g;
	const camelizeXRE = /_(\w)/g;
	let regexp: RegExp;
	sep = sep || "-";
	switch (sep) {
		case "-":
			regexp = camelizeRE;
			break;
		case "_":
			regexp = camelizeXRE;
			break;
		default:
			regexp = new RegExp(`${sep}(\\w)`, "g");
			break;
	}
	return str.replace(regexp, (_, c: string) => {
		return c ? c.toUpperCase() : c;
	});
};

/**
 * 伪数组转真数组
 * @param {ArrayLike<number>} list 伪数组
 * @param {number} start 开始转换索引，默认:0 整个转换
 * @returns array 真数组
 */
export const toArray: ToArrayType<number> = (list, start = 0) => {
	let num = list.length - start;
	const result = new Array(num);
	while (num--) {
		result[num] = list[num + start];
	}
	return result;
};

/**
 * 伪数组判定
 * @param obj
 * @returns boolean
 */
export const isArrayLike: IsArrayLikeType = obj => {
	if (obj && typeof obj === "object") {
		return (
			typeof obj.length === "number" &&
			typeof obj[obj.length - 1] !== "undefined"
		);
	}
	return false;
};

/**
 * 驼峰命名转链接符
 * @param str
 * @param sep
 * @returns
 */
export const hyphenate: CommonFunType<string> = (str, sep = "-") => {
	const regexp = /\B([A-Z])/g;
	return str.replace(regexp, `${sep}$1`).toLowerCase();
};

console.log(hyphenate("uSerId"));
