import React from 'react'

import Input from '../Input'
import Item from './SettingsItem.styled'

const SettingsItem = props => {
  return (
    <Item>
      <Item.Name>{props.name}</Item.Name>
      <Input
        labelText={props.labelText}
        labelIcon={props.labelIcon}
        id={props.inputId}
        value={props.value}
        onChange={props.onChange}
      />
    </Item>
  )
}

export default SettingsItem
