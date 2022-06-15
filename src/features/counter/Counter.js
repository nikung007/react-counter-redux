import { useSelector , useDispatch } from "react-redux";
import { decrement , increment } from "./CounterSlice"; 

function Counter() {

    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch()

  return (
    <div>
        <div className='btn'>

            <button onClick={ () => { dispatch(increment()) }}>Increment</button>

            <span>Count : {count}</span>

            <button onClick={ () => { dispatch(decrement()) }}>Decrement</button>

        </div>
    </div>
  )
}

export default Counter;