import {
    dataType
}  from './data/data'
export interface IDeepReplace {
    obj?:any;
    cb?:any;
}
/**
 * to judge whether variable is Object
 *
 * @param obj
 * @return {Boolean} - whether variable is Object .
 */
const isObject = (obj:any) => {
    return dataType(obj) === 'object'
}

/**
 * 判断object是否为空
 *
 * @param obj
 * @return {Boolean} - whether Object is empty .
 */
const isEmpty = (obj:any) => {
    return Object.keys(obj).length === 0
}

/**
 * deep map object without inherit
 *
 * @param obj
 * @return {Array}
 */
const deepReplaceVal = (opt:IDeepReplace = {}) => {
    var obj = opt.obj
    var cb = opt.cb
    var replacedObj = {}
    var valArr = Object.values(obj)
    var keyArr = Object.keys(obj)

    valArr.forEach((val, index) => {
        if (isObject(val)) {
            replacedObj[keyArr[index]] = deepReplaceVal({
                obj: val,
                cb
            })
        } else {
            replacedObj[keyArr[index]] = cb(val)
        }
    })

    return replacedObj
}

/**
 * {a: {b: 1}} => {'a.b': 1}
 *
 * @param obj
 * @return {Array}
 */
const multiToOne = (objHub:any) => {
    let transformObj = {}
    let prefix = ''

    let valArr = Object.values(objHub)
    let keyArr = Object.keys(objHub)

    function deep(prefix:string, obj:any) {
        let valArr = Object.values(obj)
        let keyArr = Object.keys(obj)
        let objPrefix = ''

        valArr.forEach((val, index) => {
            objPrefix = `${prefix}.${keyArr[index]}`

            if (isObject(val)) {
                return deep(objPrefix, val)
            } else {
                Object.assign(transformObj, {
                    [objPrefix]: val
                })
            }
        })
    }

    valArr.forEach((val, index) => {
        prefix = keyArr[index]

        if (isObject(val)) {
            return deep(prefix, val)
        } else {
            Object.assign(transformObj, {
                [prefix]: val
            })
        }
    })

    return transformObj
}

 export {
    isObject,
    deepReplaceVal,
    isEmpty,
    multiToOne
}