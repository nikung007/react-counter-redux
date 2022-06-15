import { useSelector } from 'react-redux'

import React from 'react'

function Coin() {

    const count = useSelector((state) => state.counter.count);

  return (
    <div className='btn'>

        <span>Coin : {count}</span>

    </div>
  )
}

export default Coin