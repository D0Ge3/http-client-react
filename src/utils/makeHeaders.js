export const makeHeaders = (headersArr) => {
  let headersObj = {}
  headersArr.forEach((header) => (headersObj[header.name] = header.value))
  return headersObj
}
