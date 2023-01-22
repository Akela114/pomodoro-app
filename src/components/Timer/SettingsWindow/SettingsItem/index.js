import React, { useState, useEffect, useRef } from 'react'

import { Item, ItemControl } from './SettingsItem.styled'

import chevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import chevronDownIcon from '../../../../assets/icons/chevron-down.svg'

const SettingsItem = props => {
  const inputRef = useRef(null)

  useEffect(() => {
    const handleTryToChangeValue = e => {
      switch (e.key) {
        case 'ArrowUp':
          handleValueIncrement()
          break
        case 'ArrowDown':
          handleValueDecrement()
          break
        case 'Tab':
          e.preventDefault()
          props.onFocusedInputChange(props.inputId)
          break
      }
    }

    if (props.isFocused) {
      window.addEventListener('keydown', handleTryToChangeValue)
      inputRef.current.focus()
    }

    return () => window.removeEventListener('keydown', handleTryToChangeValue)
  })

  const handleValueChange = e => {
    let targetValue = e.target.value

    const regEx = /^[1-9][0-9]{0,2}$/
    if (targetValue !== '' && !regEx.test(targetValue)) return

    props.onChange(targetValue)
  }

  const handleBlur = e => {
    props.onBlur()

    let targetValue = e.target.value

    if (targetValue !== '') return

    props.onChange('1')
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
    <Item>
      <Item.Name>{props.name}</Item.Name>
      <ItemControl>
        <ItemControl.Label>
          <ItemControl.Input
            type="text"
            value={props.value}
            id={props.inputId}
            onChange={handleValueChange}
            onFocus={props.onFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          {props.labelIcon && (
            <ItemControl.LabelIcon
              src={props.labelIcon}
              alt="Tomato Full Icon"
            />
          )}
          {props.labelText}
        </ItemControl.Label>
        <ItemControl.Actions>
          <ItemControl.Action
            type="button"
            bgIcon={chevronUpIcon}
            onClick={handleValueIncrement}
          />
          <ItemControl.Action
            type="button"
            bgIcon={chevronDownIcon}
            onClick={handleValueDecrement}
          />
        </ItemControl.Actions>
      </ItemControl>
    </Item>
  )
}

export default SettingsItem
