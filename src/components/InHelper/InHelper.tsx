import React from "react"
import './InHelper.css'
import Inputs from '../Inputs/Inputs'

export interface InHelperProps {
  convertValueInHelperFormat1: (value:string) => string[]
  convertValueInHelperFormat2: (value:string) => string[]
}

const InHelper: React.FC<InHelperProps> = (props) => {
return (
  <>
    <Inputs convertValueInHelperFormat1={props.convertValueInHelperFormat1} convertValueInHelperFormat2={props.convertValueInHelperFormat2}/>
  </>
)
}

export default InHelper