import React from "react"
import './InHelper.css'
import Inputs from '../Inputs/Inputs'

export interface InHelperProps {
  convertValueFromKey: (value:string, key:string) => string[]
  convertValueInHelperFormat1: (value:string) => string[]
  convertValueInHelperFormat2: (value:string) => string[]
}

const InHelper: React.FC<InHelperProps> = (props) => {
  return (
    <>
      <Inputs convertValueFromKey={props.convertValueFromKey} convertValueInHelperFormat1={props.convertValueInHelperFormat1} convertValueInHelperFormat2={props.convertValueInHelperFormat2}/>
    </>
  )
}

export default InHelper