import React from 'react'

import { Wrapper, Control, Actions } from './Input.styled'

import chevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import chevronDownIcon from '../../../../assets/icons/chevron-down.svg'

const Input = props => {
  const handleValueChange = e => {
    let targetValue = e.target.value

    const regEx = /^[1-9][0-9]{0,2}$/
    if (targetValue !== '' && !regEx.test(targetValue)) return

    props.onChange(targetValue)
  }

  const handleBlur = e => {
    let targetValue = e.target.value

    if (targetValue !== '') return

    props.onChange(1)
  }

  const handleValueIncrement = () => {
    const value = String(+props.value + 1)

    const regEx = /^[1-9][0-9]{0,2}$/
    if (value !== '' && !regEx.test(value)) return

    props.onChange(value)
  }

  const handleValueDecrement = () => {
    const value = String(+props.value - 1)

    const regEx = /^[1-9][0-9]{0,2}$/
    if (value !== '' && !regEx.test(value)) return

    props.onChange(value)
  }

  return (
    <Wrapper>
      <Control>
        <Control.Input
          type="text"
          value={props.value}
          id={props.id}
          onChange={handleValueChange}
          onBlur={handleBlur}
        />
        <Control.Label htmlFor={props.id}>
          {props.labelIcon && (
            <Control.LabelIcon src={props.labelIcon} alt="Tomato Full Icon" />
          )}
          {props.labelText}
        </Control.Label>
      </Control>
      <Actions>
        <Actions.Button
          bgIcon={chevronUpIcon}
          type="button"
          onClick={handleValueIncrement}
        />
        <Actions.Button
          bgIcon={chevronDownIcon}
          type="button"
          onClick={handleValueDecrement}
        />
      </Actions>
    </Wrapper>
  )
}

export default Input
