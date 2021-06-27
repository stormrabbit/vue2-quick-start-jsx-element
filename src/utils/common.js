import dayjs from 'dayjs'

/**
 * 格式化日期
 * @param {*} date 
 * @returns 
 */
export const formatDate = (date) => dayjs(date).format('YYYY-MM-DD')

/**
 * 下划线转驼峰
 * @param {*} str 
 * @returns 
 */
export function toHump(str = '') {
    return str.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}

/**
 * 驼峰转换下划线
 * @param {*} str 
 * @returns 
 */
export function toLine(str) {
  return str.replace(/([A-Z])/g,"_$1").toLowerCase();
}