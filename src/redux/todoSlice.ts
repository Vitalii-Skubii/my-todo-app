import { createSlice } from '@reduxjs/toolkit'

interface Todo {
  id: number
  name: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = {
  payload: P
  type: T
} & ([M] extends [never]
  ? object
  : {
    meta: M
  }) &
([E] extends [never]
  ? object
  : {
    error: E
  })

const initialState: TodoState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        name: action.payload,
        completed: false,
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { addTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
