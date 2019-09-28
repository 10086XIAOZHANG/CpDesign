/**
 * 转换为毫秒的时间戳
 *
 * @param {string | number} value
 */
const time = (value) => {
    if (!value) {
        return false
    }

    if (!isNaN(value)) {
        value = parseInt(value, 10)

        if (value.toString().length === 10) {
            value = value * 1000
        }
    } else {
        value = value.replace(/-/g, '/')
    }

    return new Date(value).getTime()
}


/**
 * 格式化时间
 *
 * @param {string | number} value - 需要转换的值，数字类型则认为是时间戳，字符串能转换为数字也认为时间戳
 * @param {string} format - 需要格式化的值
 */
const format = (value, format = 'yyyy-MM-dd') => {
    if (!value) {
        return '--'
    }

    let date = new Date(time(value))
    let str = format
    let Week = ['日', '一', '二', '三', '四', '五', '六']

    str = str.replace(/yyyy|YYYY/, date.getFullYear())
    str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100) : `0${date.getYear() % 100}`)

    str = str.replace(/MM/, date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`)
    str = str.replace(/w|W/g, Week[date.getDay()])
    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate() : '0' + date.getDate())
    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())

    return str
}

/**
 * 将秒数格式化
 */
const formatSecond = (second, format = 'hh-mm-ss') => {
    let formatTime = format

    if (format.includes('hh')) {
        let hour = Math.floor(second / 3600)
        let minute = Math.floor(second / 60) % 60
        let sec = second % 60

        formatTime = formatTime.replace(/hh|HH/, hour < 10 ? `0${hour}` : hour)
        formatTime = formatTime.replace(/mm/, minute < 10 ? `0${minute}` : minute)
        formatTime = formatTime.replace(/ss|SS/, sec < 10 ? `0${sec}` : sec)
    }

    return formatTime
}

export {
    time,
    format,
    formatSecond
}
