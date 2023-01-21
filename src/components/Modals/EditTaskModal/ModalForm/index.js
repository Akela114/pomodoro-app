import React from 'react'

import {
  Form,
  Controls,
  InputBlock,
  InputActions,
  Action,
} from './ModalForm.styled'

import tomatoFullIcon from '../../../../assets/icons/tomato/tomato-full.svg'
import chevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import chevronDownIcon from '../../../../assets/icons/chevron-down.svg'

const ModalForm = () => {
  return (
    <Form>
      <Controls>
        <Controls.TitleControl
          type="text"
          value="Разработать дизайн для кнопки приложения"
          placeholder="Введите название задачи..."
        />
        <Controls.DurationControlWrapper>
          <InputBlock>
            <InputBlock.Icon src={tomatoFullIcon} alt="Tomato Full Icon" />
            <InputBlock.Factor>x1</InputBlock.Factor>
            <InputBlock.Input type="text" value="30" />
            <InputBlock.Unit>мин</InputBlock.Unit>
          </InputBlock>
          <InputActions>
            <InputActions.Button bgIcon={chevronUpIcon} type="button" />
            <InputActions.Button bgIcon={chevronDownIcon} type="button" />
          </InputActions>
        </Controls.DurationControlWrapper>
      </Controls>
      <Action type="submit">Сохранить</Action>
    </Form>
  )
}

export default ModalForm
