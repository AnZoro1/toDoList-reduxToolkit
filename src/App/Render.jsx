import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, markTodo } from '../features/textReducer'
import styles from './Render.module.css'

const Render = (props) => {
  const dispatch = useDispatch()
  const handleDelete = (el) => {
    dispatch(deleteTodo(el))
    console.log(el)
  }
  const arr = useSelector((state) => state.text)
  const [markText, setMarkText] = useState(false)
  const handleMark = (ind) => {
    dispatch(markTodo(ind))
  }

  return (
    <div className={styles.main}>
      <button
        className={styles.markButton}
        onClick={() => handleMark(props.index)}
      >
        ⭐
      </button>
      <div className={arr[props.index].mark ? styles.divMark2 : styles.divMark}
      >
        {props.text}
      </div>

      <button onClick={() => handleDelete(props.index)}>x</button>
    </div>
  )
}

export default Render
