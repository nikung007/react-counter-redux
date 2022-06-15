import { useSelector , useDispatch } from "react-redux";
import { decrement , increment , incrementByAmount } from "./CounterSlice"; 

function Counter() {

    const count = useSelector((state) => state.counter.count);
    const font = useSelector((state) => state.color.color1);

    const dispatch = useDispatch()

  return (
    <div>
        <div className='btn'>

            <button onClick={ () => { dispatch(increment()) }}>Increment</button>

            <span style={{color:font}}>Count : {count}</span>

            <button onClick={ () => { dispatch(decrement()) }}>Decrement</button>

            <button onClick={ () => { dispatch(incrementByAmount(5)) }}> By * 5 </button>

        </div>
    </div>
  )
}

export default Counter;