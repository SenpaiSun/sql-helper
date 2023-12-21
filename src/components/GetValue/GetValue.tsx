import Inputs, {CommonProps} from '../Inputs/Inputs'
import './GetValue.css'
import React from 'react'

interface GetValueProps extends CommonProps {}

const GetValue: React.FC<GetValueProps> = (props) => {
  return (
    <>
      <Inputs convertValueFromKey={props.convertValueFromKey}/>
    </>
  )
}

export default GetValue