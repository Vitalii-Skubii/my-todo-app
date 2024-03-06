import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Typography } from '@mui/material'

const ToDoCounter: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)

  const completedCount = todos.filter((todo) => todo.completed).length
  const uncompletedCount = todos.length - completedCount

  return (
    <div>
      <Typography align='center'>
            Completed: {completedCount}, Uncompleted: {uncompletedCount}
      </Typography>
    </div>
  )
}

export default ToDoCounter
