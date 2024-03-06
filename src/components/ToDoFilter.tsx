import React, { useState } from 'react'
import { Select, MenuItem } from '@mui/material'

interface ToDoFilterProps {
  onChangeFilter: (filter: string) => void
}

type SelectChangeEvent<Value = string> = (Event & {
  target: {
    value: Value
    name: string
  }
}) | React.ChangeEvent<HTMLInputElement>

const ToDoFilter: React.FC<ToDoFilterProps> = ({ onChangeFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const handleFilterChange = (event: SelectChangeEvent<string>):void => { 
    const newFilter = event.target.value
    setSelectedFilter(newFilter)
    onChangeFilter(newFilter)
  }

  return (
    <div>
      <Select value={selectedFilter} onChange={handleFilterChange} sx={{ width: '150px' }}> 
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="uncompleted">Uncompleted</MenuItem>
      </Select>
    </div>
  )
}

export default ToDoFilter

