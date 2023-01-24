import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
  Wrapper,
  TasksGroup,
  TasksList,
  Button,
  Message,
} from './TasksList.styled'
import FirstTask from './FirstTask'
import ListItem from './ListItem'

import plusIcon from '../../assets/icons/plus.svg'

const TasksInfo = () => {
  const navigate = useNavigate()

  const tasks = useSelector(state => state.tasks)

  const handleShowCreateNewTaskModal = () => {
    navigate('/create-new-task')
  }

  return (
    <Wrapper>
      <DndProvider backend={HTML5Backend}>
        {tasks.length > 0 ? (
          <TasksGroup>
            {tasks && (
              <TasksList>
                {tasks.map((task, idx) => (
                  <ListItem key={task.id} task={task} idx={idx} />
                ))}
              </TasksList>
            )}
          </TasksGroup>
        ) : (
          <Message>Добавьте задачу для начала работы</Message>
        )}
      </DndProvider>
      <Button color="tertiary" onClick={handleShowCreateNewTaskModal}>
        <Button.Icon src={plusIcon} alt="Plus Icon" />
        <Button.Text>Новая задача</Button.Text>
      </Button>
    </Wrapper>
  )
}

export default TasksInfo
