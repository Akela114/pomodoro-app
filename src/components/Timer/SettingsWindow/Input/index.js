import React from 'react'

import { Wrapper, Control, Actions } from './Input.styled'

import chevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import chevronDownIcon from '../../../../assets/icons/chevron-down.svg'

const Input = props => {
  return (
    <Wrapper>
      <Control>
        <Control.Input type="text" value="30" id={props.id} />
        <Control.Label htmlFor={props.id}>
          {props.labelIcon && (
            <Control.LabelIcon src={props.labelIcon} alt="Tomato Full Icon" />
          )}
          {props.labelText}
        </Control.Label>
      </Control>
      <Actions>
        <Actions.Button bgIcon={chevronUpIcon} type="button" />
        <Actions.Button bgIcon={chevronDownIcon} type="button" />
      </Actions>
    </Wrapper>
  )
}

export default Input
