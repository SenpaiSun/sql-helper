import DiffMatchPatch from 'diff-match-patch';

export const compareTexts = (originalText: string, modifiedText: string): JSX.Element => {
  const dmp = new DiffMatchPatch();

  // Получаем массив изменений между двумя текстами
  const diffs = dmp.diff_main(originalText, modifiedText);
  dmp.diff_cleanupSemantic(diffs); // Оптимизация различий

  // Преобразуем диффы в элементы JSX
  const result = diffs.map((diff, index) => {
    const [operation, text] = diff;
    let style = {};

    if (operation === -1) {
      // Удаленный текст
      style = { backgroundColor: 'red', textDecoration: 'line-through' };
    } else if (operation === 1) {
      // Добавленный текст
      style = { backgroundColor: 'green' };
    }

    return (
      <span key={index} style={style}>
        {text}
      </span>
    );
  });

  return <div>{result}</div>;
};