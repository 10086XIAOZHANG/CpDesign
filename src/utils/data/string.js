const {
    dataType
} = require('./data')

/**
 * to judge whether variable is string
 *
 * @param string
 * @return {Boolean} - whether variable is Obarrayject .
 */
const isString = (str) => {
    return dataType(str) === 'string'
}

/**
 * 删除左右两端的换行
 *
 * @param {String}
 * @return {String}
 *
 */
const trimEnter = (str) => {
    return str.replace(/(^\n*)|(\n*$)/g, '')
}

/**
 * 省略字符串
 *
 * @param {string} str
 * @param {number} length - 需要保留字符串的长度
 */
const omit = (str, length) => {
    return str.substr(0, length) + '...'
}

/**
 * 屏蔽制定位置的字符串
 *
 * @param {string} str
 * @param {number} from 开始屏蔽的起始位置
 * @param {number} to 不写则默认为字符串末尾的位置
 */
const shield = (str, from, to) => {
    if (!str) {
        return false
    }

    if (to !== undefined && to < from) {
        return false
    }

    let shieldString = ''

    for (let i = 0, len = to - from; i < len; i++) {
        shieldString = shieldString + '*'
    }

    let stringArray = str.split('')

    stringArray.splice(from, to - from, shieldString).join('')

    return stringArray
}

module.exports = {
    isString,
    trimEnter,
    omit,
    shield
}
