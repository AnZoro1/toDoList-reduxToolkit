import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Render from '../App/Render'
import textReducer, { addTodo } from '../features/textReducer'

const Form = () => {
  const dispatch = useDispatch()
  const [text2, setText] = useState('')

  const submitInputValue = (e) => {
    e.preventDefault()
    dispatch(addTodo(text2))
    setText('')
  }
  const handleText = (e) => {
    setText(e.target.value)
  }
  const array = useSelector((state) => state.text)
  console.log(array)
  return (
    <div>
      <div>
        <form action="" onSubmit={submitInputValue}>
          <input type="text" value={text2} onChange={handleText} />
          <button>+++</button>
        </form>
      </div>
      <div>
        {array.map((item, index) => {
          return <Render key={index} text={item.text} index={index} elem={item} />
        })}
      </div>
    </div>
  )
}

export default Form
