import React from 'react'
import { Typography } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import ToDoCounter from '../ToDoCounter'
import ToDoFilter from '../ToDoFilter'
import { Container, iconStyles, } from './styles'

interface HeaderProps {
  handleFilterChange: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleFilterChange }) => {
  return (
    <Container>
      <Typography variant="h3">
        ToDo List
        <ChecklistIcon sx={iconStyles} />
      </Typography>
      <ToDoCounter />
      <ToDoFilter onChangeFilter={handleFilterChange} />
    </Container>
  )
}

export default Header
