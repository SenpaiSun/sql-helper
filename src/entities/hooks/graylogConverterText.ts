export const graylogConverterText = (text: string) => {
  const textArray = text.split('')
  const result: string[] = []

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === '{' || textArray[i] === '}') {
      result.push('/')
    } else if (/^[a-zA-Zа-яА-ЯёЁ0-9]$/.test(textArray[i])) {
      result.push(textArray[i])
    } else {
      result.push('.')
    }
  }
  return result.join('')
}
