import React from 'react'

import { secondsToHM } from '../../../helpers/formatSeconds'
import { Wrapper, Title, RemainingTime, ActionsGroup } from './ListItem.styled'
import editIcon from '../../../assets/icons/edit/edit-blue.svg'
import exitIcon from '../../../assets/icons/exit/exit-blue.svg'

const ListItem = props => {
  const { hours, minutes } = secondsToHM(props.task.remainingTime)

  return (
    <Wrapper>
      <Title>{props.task.title}</Title>
      <RemainingTime>
        ({hours}:{minutes})
      </RemainingTime>
      <ActionsGroup>
        <ActionsGroup.Action bgIcon={editIcon} />
        <ActionsGroup.Action bgIcon={exitIcon} />
      </ActionsGroup>
    </Wrapper>
  )
}

export default ListItem
