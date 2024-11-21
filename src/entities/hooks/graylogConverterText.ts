export const graylogConverterText = (text: string) => {
  const result: string[] = [];

  for (let char of text) {
    if (/^[a-zA-Zа-яА-ЯёЁ0-9]$/.test(char)) {
      result.push(char); // Добавляем буквы и цифры в результат
    } else {
      result.push('.'); // Заменяем все остальные символы, включая пробелы, на точку
    }
  }

  // Оборачиваем результат в слэши и возвращаем
  return '/' + result.join('') + '/';
}