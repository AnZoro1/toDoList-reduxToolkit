import { createAction, createReducer } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
const initialState = {
  text: [],
}
export const addTodo = createAction('addTodo')
export const deleteTodo = createAction('deleteTodo')
export const markTodo = createAction('markTodo')

const textReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.text.push({
      text: action.payload,
      mark: false,
    })
  })
  builder.addCase(deleteTodo, (state, action) => {
    state.text = state.text.filter((item, i) => action.payload !== i)
  })
  builder.addCase(markTodo, (state, action) => {
    state.text.map((elem, index) => {
      if (index == action.payload) {
        elem.mark = !elem.mark
      }
    })
  })
})

export default textReducer
