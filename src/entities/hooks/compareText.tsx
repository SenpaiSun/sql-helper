export const compareTexts = (originalText: string, modifiedText: string): JSX.Element => {
  // Разделяем тексты на строки
  const originalLines = originalText.split('\n');
  const modifiedLines = modifiedText.split('\n');

  const maxLength = Math.max(originalLines.length, modifiedLines.length);

  // Функция для создания html элемента с цветами для разных частей текста
  const createHighlightedText = (original: string, modified: string) => {
    const result: JSX.Element[] = [];

    const maxLen = Math.max(original.length, modified.length);
    for (let i = 0; i < maxLen; i++) {
      const charOrig = original[i] || ''; // Символ из оригинала
      const charMod = modified[i] || ''; // Символ из модифицированного

      if (charOrig === charMod) {
        result.push(<span>{charOrig}</span>);
      } else {
        // Зачеркнуть оригинал и подсветить красным
        if (charOrig) {
          result.push(
            <span style={{ backgroundColor: 'red', textDecoration: 'line-through' }}>
              {charOrig}
            </span>
          );
        }
        // Подсветить зеленым модифицированный текст
        if (charMod) {
          result.push(
            <span style={{ backgroundColor: 'green' }}>
              {charMod}
            </span>
          );
        }
      }
    }
    console.log(result)
    return <span>{result}</span>;
  };

  // Мапим строки для сравнения
  return (
    <div>
      {Array.from({ length: maxLength }).map((_, i) => (
        <div key={i}>
          {createHighlightedText(originalLines[i] || '', modifiedLines[i] || '')}
        </div>
      ))}
    </div>
  );
};