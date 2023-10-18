import React from "react"
import './InHelper.css'
import Inputs from '../Inputs/Inputs'

export interface InHelperProps {
  convertInput: (value:string) => string[]
}

const InHelper: React.FC<InHelperProps> = (props) => {
return (
  <>
    <Inputs convertInput={props.convertInput}/>
  </>
)
}

export default InHelper