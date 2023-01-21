import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

  const firstTask = useSelector(state => state.tasks[0])
  const anotherTasks = useSelector(state => state.tasks.slice(1))

  const handleShowCreateNewTaskModal = () => {
    navigate('/create-new-task')
  }

  return (
    <Wrapper>
      {firstTask ? (
        <TasksGroup>
          {firstTask && <FirstTask task={firstTask} />}
          {anotherTasks && (
            <TasksList>
              {anotherTasks.map(task => (
                <ListItem key={task.id} task={task} />
              ))}
            </TasksList>
          )}
        </TasksGroup>
      ) : (
        <Message>Добавьте задачу для начала работы</Message>
      )}
      <Button color="tertiary" onClick={handleShowCreateNewTaskModal}>
        <Button.Icon src={plusIcon} alt="Plus Icon" />
        <Button.Text>Новая задача</Button.Text>
      </Button>
    </Wrapper>
  )
}

export default TasksInfo
