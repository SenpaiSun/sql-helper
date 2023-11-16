import Inputs from '../Inputs/Inputs'
import './GetValue.css'
import React from 'react'

export interface GetValueProps {
  convertValueFromKey: (value:string, key:string) => string[]
  convertValueInHelperFormat1: (value:string) => string[]
  convertValueInHelperFormat2: (value:string) => string[]
}

const GetValue: React.FC<GetValueProps> = (props) => {
  return (
    <>
      <Inputs convertValueFromKey={props.convertValueFromKey} convertValueInHelperFormat1={props.convertValueInHelperFormat1} convertValueInHelperFormat2={props.convertValueInHelperFormat2}/>
    </>
  )
}

export default GetValue