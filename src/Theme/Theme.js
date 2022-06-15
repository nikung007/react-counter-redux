import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "./ThemeSlice"

function Theme() {
    const [color,setColor]=useState("black")
    const dispatch = useDispatch()
  return (
    <div className='btn'>
        <input type='text' onChange={(e) => setColor(e.target.value)} />
        <button onClick={() => { dispatch(changeColor(color)) }}>Color</button>
    </div>
  )
}

export default Theme