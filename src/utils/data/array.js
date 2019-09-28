/**
 * to judge whether array is empty
 *
 * @param array
 * @return {Boolean} - whether array is empty.
 */
const isEmpty = (arr) => {
  return arr.length === 0
}

/**
 * remove repeated array element
 *
 * @param array
 * @return { Array } - whether array is empty.
 */
const unique = (arr) => {
  return Array.from(new Set(arr))
}

export {
  isEmpty,
  unique
}
