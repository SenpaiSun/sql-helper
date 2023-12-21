import React from "react"
import './InHelper.css'
import Inputs, {CommonProps} from '../Inputs/Inputs'

interface InHelperProps extends CommonProps {}

const InHelper: React.FC<InHelperProps> = (props) => {
  return (
    <>
      <Inputs convertValueInHelperFormat1={props.convertValueInHelperFormat1} convertValueInHelperFormat2={props.convertValueInHelperFormat2}/>
    </>
  )
}

export default InHelper