import React, { useState } from "react"
import './Inputs.css'
import {InHelperProps} from '../InHelper/InHelper'


const Inputs: React.FC<InHelperProps> = (props) => {
  const [valueInput, setValueInput] = useState('')
  const [valueOutput, setValueOutput] = useState('')

  /* format1 - преобразовывает в формат для MySQL (пример: id1, id2, id3)
  format2 - преобразовывает в формат для Clickhouse (пример: 'id1', 'id2', 'id3') */
  const formatFromLocalStorage = localStorage.getItem('format')
  const [formatOutput, setFormatOutput] = useState(formatFromLocalStorage ? formatFromLocalStorage : 'format1')

  const handleSelectFormat1 = () => {
    setFormatOutput('format1')
    localStorage.setItem('format', 'format1')
  }

  const handleSelectFormat2 = () => {
    setFormatOutput('format2')
    localStorage.setItem('format', 'format2')
  }

  // Функция для получения текста из инпута
  const handleValueChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueInput(event.target.value)
  }

  // Функция для очистки инпутов
  const handleResetTextArea = () => {
    setValueInput('')
    setValueOutput('')
  }

  // Функция для преобразования значения из инпута в аутпут
  const handleConvertValue = () => {
    const valueOutputArray = formatOutput === 'format1' ? props.convertValueInHelperFormat1(valueInput) : props.convertValueInHelperFormat2(valueInput)
    const valueOutput = valueOutputArray.join()
    setValueOutput(valueOutput)
    console.log(formatOutput)
  }

  // Функция для копирования текста из аутпута в буфер обмена
  const handleCopyValue = () => {
    navigator.clipboard.writeText(valueOutput)
  }

  return (
    <main className="input">
      <form className="input__form">
        <div className="input__container">
          <div className="input__input-container-button">
            <div className="input__input-buttons-format">
              <p className="input__input-format">Format:</p>
              <button type="button" className={formatOutput === 'format1' ? "input__button input__button-active" : "input__button"} onClick={handleSelectFormat1}>id,</button>
              <button type="button" className={formatOutput === 'format2' ? "input__button input__button-active" : "input__button"} onClick={handleSelectFormat2}>'id',</button>
            </div>
            <button type="button" className="input__button" onClick={handleResetTextArea}>Clear</button>
          </div>
          <div className="input__container-input">
            <textarea className="input__item" placeholder="id1&#10;id2&#10;id3&#10;id4" value={valueInput} onChange={handleValueChange} spellCheck="false"></textarea>
          </div>
        </div>
        <div className="input__container input__container-button">
          <button type="button" className="input__convert" onClick={handleConvertValue}>Convert</button>
        </div>
        <div className="input__container">
          <div className="input__input-container-button input__input-container-button-copy">
              <button type="button" className="input__button" onClick={handleCopyValue}>Copy</button>
            </div>
            <div className="input__container-input">
              <textarea className="input__item input__item-output" value={valueOutput} disabled spellCheck="false"></textarea>
            </div>
        </div>
      </form>
    </main>
  )
}

export default Inputs