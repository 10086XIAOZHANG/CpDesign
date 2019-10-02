/**
 * analyzing data types
 *
 * @param variable
 * @return {String} - data type.
 *
 * @example
 * type({}) // "object"
 * type([]) // "array"
 * type(5) // "number"
 * type(null) // "null"
 * type() // "undefined"
 * type(/abcd/) // "regex"
 * type(new Date()) // "date"
 */
const dataType = function (variable:any) {
  const str = Object.prototype.toString.call(variable)
  return (str as any).match(/\[object (.*?)\]/)[1].toLowerCase()
}

export {
  dataType
}
