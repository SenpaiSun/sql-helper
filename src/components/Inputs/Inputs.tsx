import React, { useState } from "react"
import './Inputs.css'
import {InHelperProps} from '../InHelper/InHelper'


const Inputs: React.FC<InHelperProps> = (props) => {
  const [valueInput, setValueInput] = useState('')
  const [valueOutput, setValueOutput] = useState('')
  console.log(valueInput)
  const handleValueChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueInput(event.target.value)
  }

  const handleResetTextArea = () => {
    setValueInput('')
    setValueOutput('')
  }

  const handleConvertValue = () => {
    const valueOutputArray = props.convertInput(valueInput)
    const valueOutput = valueOutputArray.join()
    setValueOutput(valueOutput)
  }

  const handleCopyValue = () => {
    navigator.clipboard.writeText(valueOutput)
  }

  return (
    <main className="input">
      <form className="input__form">
        <div className="input__container">
          <div className="input__input-container-button">
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