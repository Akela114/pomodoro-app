import React from 'react'

import { Wrapper, TasksGroup, TasksList, Button } from './TasksList'
import FirstTask from './FirstTask'
import ListItem from './ListItem'
import plusIcon from '../../assets/icons/plus.svg'

const DUMMY_TASKS = [
  {
    id: 't1',
    title: 'Составить FlowChart для логики приложения',
    totalTime: 18000,
    remainingTime: 13380,
  },
  {
    id: 't2',
    title: 'Разработать дизайн для кнопки приложения',
    totalTime: 7200,
    remainingTime: 7200,
  },
  {
    id: 't3',
    title: 'Задача 3',
    totalTime: 1800,
    remainingTime: 1800,
  },
  {
    id: 't4',
    title: 'Задача 4',
    totalTime: 4800,
    remainingTime: 4800,
  },
  {
    id: 't5',
    title: 'Задача 5',
    totalTime: 7200,
    remainingTime: 7200,
  },
  {
    id: 't6',
    title: 'Задача 6',
    totalTime: 7200,
    remainingTime: 7200,
  },
]

const TasksInfo = () => {
  const firstTask = DUMMY_TASKS?.[0]
  const anotherTasks = DUMMY_TASKS?.length > 1 ? DUMMY_TASKS.slice(1) : null

  return (
    <Wrapper>
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
      <Button color="tertiary">
        <Button.Icon src={plusIcon} alt="Plus Icon" />
        <Button.Text>Новая задача</Button.Text>
      </Button>
    </Wrapper>
  )
}

export default TasksInfo
