/* eslint-disable import/named */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'
import { TextField, Button, Theme} from '@mui/material' 
import useInputValidation from '../../hooks/useInputValidation'
import { FormContainer, FormFieldContainer, HelperText } from './styles'

interface ToDoFormProps {
  maxLength: number
  theme: Theme
}

const ToDoForm: React.FC<ToDoFormProps> = ({ maxLength, theme }) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const isValid = useInputValidation(maxLength, inputValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
    if (inputValue.trim() && isValid) {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormFieldContainer>
          <TextField
            type="text"
            placeholder="Todo"
            variant="outlined"
            value={inputValue}
            onChange={handleChange}
            error={!isValid}
          />
          {!isValid && 
            <HelperText theme={theme}>
              Maximum {maxLength} characters allowed
            </HelperText>
          }
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ height: 50 }}
          >
            Add Todo
          </Button>
        </FormFieldContainer>
      </form>
    </FormContainer>
  )
}

export default ToDoForm
