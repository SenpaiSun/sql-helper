import React, { useState } from "react"
import './Inputs.css'

const Inputs: React.FC = () => {
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

  return (
    <main className="input">
      <form className="input__form">
        <div className="input__container">
          <div className="input__input-container-button">
            <button type="button" className="input__button" onClick={handleResetTextArea}>Clear</button>
          </div>
          <div className="input__container-input">
            <textarea className="input__item" placeholder="id1&#10;id2&#10;id3&#10;id4" value={valueInput} onChange={handleValueChange}></textarea>
          </div>
        </div>
        <div className="input__container input__container-button">
          <button type="submit" className="input__convert">Convert</button>
        </div>
        <div className="input__container">
          <div className="input__input-container-button input__input-container-button-copy">
              <button type="button" className="input__button">Copy</button>
            </div>
            <div className="input__container-input">
              <textarea className="input__item" value={valueOutput} disabled></textarea>
            </div>
        </div>
      </form>
    </main>
  )
}

export default Inputs