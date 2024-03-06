/* eslint-disable import/named */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { toggleTodo } from '../../redux/todoSlice'
import { ListItemText, Checkbox, Theme } from '@mui/material'
import { StyledBox, StyledList, StyledListItem, checkboxStyles } from './styles'

interface ToDoListProps {
  filter: string
  theme: Theme
}

const ToDoList: React.FC<ToDoListProps> = ({ filter, theme }) => {
  const todos = useSelector((state: RootState) => {
    switch (filter) {
      case 'completed':
        return state.todos.todos.filter((todo) => todo.completed)
      case 'uncompleted':
        return state.todos.todos.filter((todo) => !todo.completed)
      default:
        return state.todos.todos
    }
  })
  const dispatch = useDispatch()

  const handleToggle = (id: number): void => {
    dispatch(toggleTodo(id))
  }

  return (
    <StyledList>
      {todos.map((todo) => 
        <StyledBox key={todo.id}>
          <StyledListItem
            disablePadding
            onClick={(): void => handleToggle(todo.id)}
            theme={theme}
          >
            <Checkbox checked={todo.completed} sx={checkboxStyles({ theme })} />
            <ListItemText
              primary={todo.name}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            />
          </StyledListItem>
        </StyledBox>
      )}
    </StyledList>
  )
}

export default ToDoList
