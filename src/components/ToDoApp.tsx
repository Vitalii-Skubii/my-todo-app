import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList'
import theme from '../styles/theme'
import Header from './Header/Header'

const App: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const handleFilterChange = (newFilter: string):void => {
    setFilter(newFilter)
  }

  return (
    <Provider store={store}>
      <Header handleFilterChange={handleFilterChange}/>
      <ToDoForm maxLength={12} theme={theme}/> 
      <ToDoList filter={filter} theme={theme} />
    </Provider>
  )
}

export default App