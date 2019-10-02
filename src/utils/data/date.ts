/**
 * 转换为毫秒的时间戳
 *
 * @param {string | number} value
 */
const time = (value:string | number) => {
    if (!value) {
        return false
    }

    if (!isNaN(value as number)) {
        value = parseInt(value.toString() , 10)

        if (value.toString().length === 10) {
            value = value * 1000
        }
    } else {
        value = value.toString().replace(/-/g, '/')
    }

    return new Date(value).getTime()
}


/**
 * 格式化时间
 *
 * @param {string | number} value - 需要转换的值，数字类型则认为是时间戳，字符串能转换为数字也认为时间戳
 * @param {string} format - 需要格式化的值
 */
const format = (value:string | number, format = 'yyyy-MM-dd') => {
    if (!value) {
        return '--'
    }

    let date = new Date(Number(time(value)))
    let str = format
    let Week = ['日', '一', '二', '三', '四', '五', '六']

    str = str.replace(/yyyy|YYYY/, (date.getFullYear()).toString())
    str = str.replace(/yy|YY/, ((date.getFullYear() % 100) > 9 ? (date.getFullYear() % 100) : `0${date.getFullYear() % 100}`).toString())

    str = str.replace(/MM/, (date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`).toString())
    str = str.replace(/w|W/g, Week[date.getDay()])
    str = str.replace(/dd|DD/, (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()).toString())
    str = str.replace(/hh|HH/, (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()).toString())
    str = str.replace(/mm/, (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()).toString())
    str = str.replace(/ss|SS/, (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()).toString())

    return str
}

/**
 * 将秒数格式化
 */
const formatSecond = (second:any, format = 'hh-mm-ss') => {
    let formatTime = format

    if (format.includes('hh')) {
        let hour = Math.floor(second / 3600)
        let minute = Math.floor(second / 60) % 60
        let sec = second % 60

        formatTime = formatTime.replace(/hh|HH/, (hour < 10 ? `0${hour}` : hour).toString())
        formatTime = formatTime.replace(/mm/, (minute < 10 ? `0${minute}` : minute).toString())
        formatTime = formatTime.replace(/ss|SS/, (sec < 10 ? `0${sec}` : sec).toString())
    }

    return formatTime
}

export {
    time,
    format,
    formatSecond
}
