import React, { useEffect, useState } from "react"
import './Inputs.css'
import { useLocation } from "react-router-dom"

export interface CommonProps {
  convertValueInHelperFormat1?: (value: string) => string[];
  convertValueInHelperFormat2?: (value: string) => string[];
  convertValueFromKey?: (value: string, key: string) => string[];
}

const Inputs: React.FC<CommonProps> = (props) => {
  const [valueInput, setValueInput] = useState('')
  const [valueOutput, setValueOutput] = useState('')
  const [isLocation, setIsLocation] = useState('')
  const [valueKey, setValueKey] = useState('')
  const [copyState, setCopyState] = useState(false)
  const router = useLocation()

  useEffect(() => {
    if(router.pathname === '/sql-helper/in-helper') {
      setIsLocation('in-helper')
    } else if(router.pathname === '/sql-helper/get-value') {
      setIsLocation('get-value')
    }
  }, [router.pathname])

  useEffect(() => {
    if(copyState === true) {
      console.log(copyState)
      const buttonCopy = document.querySelector('.input__button-copy-disabled') as HTMLElement | null
      if (buttonCopy) {
        buttonCopy.classList.add('input__button-copy-enable');
        buttonCopy.textContent = 'Ok!';
        setTimeout(() => {
          buttonCopy.classList.remove('input__button-copy-enable');
          buttonCopy.textContent = 'Copy';
          setCopyState(false);
        }, 300);
      }
    }
  }, [copyState]);

  // format1 - преобразовывает в формат для MySQL (пример: id1, id2, id3)
  // format2 - преобразовывает в формат для Clickhouse (пример: 'id1', 'id2', 'id3')
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

    // Функция для получения текста из инпута
    const handleValueKey = (event:React.ChangeEvent<HTMLInputElement>) => {
      setValueKey(event.target.value)
    }

  // Функция для очистки инпутов
  const handleResetTextArea = () => {
    setValueInput('')
    setValueOutput('')
  }

  // Функция для преобразования значения из инпута в аутпут
  const handleConvertValue = () => {
    if (isLocation === 'in-helper') {
      const convertFunction = formatOutput === 'format1' ? props.convertValueInHelperFormat1 : props.convertValueInHelperFormat2;
      if (convertFunction) {
        const valueOutputArray = convertFunction(valueInput);
        const valueOutput = valueOutputArray.join();
        setValueOutput(valueOutput);
        console.log(formatOutput);
      }
    }
    if (isLocation === 'get-value' && props.convertValueFromKey) {
      const getValue = props.convertValueFromKey(valueInput, valueKey);
      console.log(getValue)
      if(getValue) {
        const resultString = getValue.join('\n');
        setValueOutput(resultString)
      }
    }
  }

  // Функция для копирования текста из аутпута в буфер обмена
  const handleCopyValue = () => {
    navigator.clipboard.writeText(valueOutput)
    setCopyState(true)
  }

  return (
    <main className="input">
      <form className="input__form">
        <div className="input__container">
          <div className="input__input-container-button">
            <div className="input__input-buttons-format">
              <p className="input__input-format">{isLocation === 'in-helper' ? 'Format:' : 'The key to take the values:'}</p>
              {isLocation === 'in-helper' ? (
                <>
                  <button type="button" className={formatOutput === 'format1' ? "input__button input__button-active" : "input__button"} onClick={handleSelectFormat1}>id,</button>
                  <button type="button" className={formatOutput === 'format2' ? "input__button input__button-active" : "input__button"} onClick={handleSelectFormat2}>'id',</button>
                </>
              ) : <input className="input__key" placeholder="KeyName" value={valueKey} onChange={handleValueKey}/>}
            </div>
            <button type="button" className="input__button" onClick={handleResetTextArea}>Clear</button>
          </div>
          <div className="input__container-input">
            <textarea className="input__item" placeholder={isLocation === 'in-helper' ? 'id1\u000Aid2\u000Aid3\u000Aid4' : '{\u000A   "_id": "5f4d35a8c2b946b24a5c6dbf",\u000A   "OrganizationId": "5f4d35a8c2b946b24a5c6dc0",\u000A   "CurrencyAccount": "RUB",\u000A   "Balance": "12800,61"\u000A}\u000A\u000A{\u000A   "_id": "5f4d35a8c2b946b24a5c6dc1",\u000A   "OrganizationId": "5f4d35a8c2b946b24a5c1fc2",\u000A   "CurrencyAccount": "USD",\u000A   "Balance": "300,27"\u000A}'} value={valueInput} onChange={handleValueChange} spellCheck="false"/>
          </div>
        </div>
        <div className="input__container input__container-button">
          <button type="button" className="input__convert" onClick={handleConvertValue}>{isLocation === 'in-helper' ? 'Convert' : 'Get value'}</button>
        </div>
        <div className="input__container">
          <div className="input__input-container-button input__input-container-button-copy">
              <button type="button" className="input__button input__button-copy-disabled" onClick={handleCopyValue}>Copy</button>
            </div>
            <div className="input__container-input">
              <textarea className="input__item input__item-output" value={valueOutput} disabled spellCheck="false"/>
            </div>
        </div>
      </form>
    </main>
  )
}

export default Inputs