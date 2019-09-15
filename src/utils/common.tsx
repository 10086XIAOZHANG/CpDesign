/**
 * 阿拉伯数字 转中文数字
 * @param num 阿拉伯数字
 */
const numberToChinese = (num: number) => {
  const chnNumChar = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九'
  ];
  const chnUnitChar = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千'
  ];
  let chnStr = '';
  let str = num.toString();
  while (str.length > 0) {
    // tslint:disable-next-line: radix
    const tmpNum = chnNumChar[parseInt(str.substr(0, 1))];
    const tmpChar = chnUnitChar[str.length - 1];
    chnStr += chnStr.substr(-1, 1) === '零' && tmpNum === '零' ? '' : tmpNum;
    if (tmpNum !== '零') {
      chnStr += tmpChar;
    }
    if (chnStr === '一十') {
      chnStr = '十';
    }
    str = str.substr(1);
    // tslint:disable-next-line: radix
    if (parseInt(str) === 0) {
      if (str.length >= 8) {
        // tslint:disable-next-line: triple-equals
        if (chnStr.substr(-1, 1) != '亿') {
          chnStr += '亿';
        }
      } else if (str.length >= 5) {
        if (chnStr.substr(-1, 1) !== '万') {
          chnStr += '万';
        }
      }
      str = '';
    }
  }
  return chnStr;
};
/**
 * 返回格式化好的省略字符串
 * @param str 字符串(账号、地址省略)
 * @param number (保留的位数(前后))
 * @param omitStr (中间省略代替的字符串串)
 */
// tslint:disable-next-line: variable-name
const formatOmitStr = (str: string, number: number, omitStr: string) => {
  if (!str) {
    return '';
  }
  // const phoneOmit = str.length - number * 2;
  if (number > 4) {
    return (
      fourStrFormat(str.substr(0, number)) +
      omitStr +
      ' ' +
      fourStrFormat(str.substr(str.length - number, str.length))
    );
  }
  return (
    str.substr(0, number) +
    omitStr +
    str.substr(str.length - number, str.length)
  );
};
/**
 * 返回每4位加一空格
 * @param str
 */
const fourStrFormat = (str: string) => {
  return str.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
};
/**
 * url search 名称查询
 * @param name searchName
 */
const getURLQueryString = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};
/**
 * 返回两个字符串中重复字符串的最大连续长度
 * @param strA
 * @param strB
 */
const getMaxCommonStringCount = (strA: string, strB: string): number => {
  let strLong = 0;
  if (!strA || !strB) {
    return strLong;
  }

  let shortStr = '';
  let longStr = '';
  if (strA.length > strB.length) {
    shortStr = strB;
    longStr = strA;
  } else {
    shortStr = strA;
    longStr = strB;
  }

  let startIdx = 0;
  let endIndex = 0;

  for (let i = 0; i < shortStr.length; i++) {
    // 从短的字符串开始，获取每一次的固定对比长度，并且长度逐渐递减
    startIdx = 0;
    endIndex = shortStr.length - i;
    const fixlength = endIndex;

    while (endIndex <= shortStr.length) {
      // 按固定长度，轮询获取较短字符串中的字符串作为对比串，与长字符串对比
      const comparaStr = shortStr.substring(startIdx, fixlength);

      if (longStr.indexOf(comparaStr) !== -1) {
        strLong = comparaStr.length;
        return strLong;
      }

      // 按上面的固定长度轮询
      startIdx = startIdx + 1;
      endIndex = endIndex + 1;
    }
  }

  return strLong;
};
/**
 * 根据key返回数组对象中的item中对应的value
 * @param key key
 */
const getArraymatchItemByKey = (array: any[], key: string, value: any) => {
  let val = value;
  if (array.length !== 0) {
    if (!val) {
      val = array[0][key];
    }
  }
  return array.filter((element, index) => {
    return element[key] === val;
  });
};

const formatDate = (timestamp: number) => {
  const now = new Date(timestamp * 1000);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  return (
    year +
    '-' +
    formatDateTwo(month) +
    '-' +
    formatDateTwo(date) +
    ' ' +
    formatDateTwo(hour) +
    ':' +
    formatDateTwo(minute) +
    ':' +
    formatDateTwo(second)
  );
};
const formatDateTwo = (d: number) => {
  if (d < 10) {
    return `0${d}`;
  }
  return d;
};

export {
  formatOmitStr,
  getURLQueryString,
  getMaxCommonStringCount,
  getArraymatchItemByKey,
  numberToChinese,
  formatDate
};
