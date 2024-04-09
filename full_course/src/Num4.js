import React, { useContext } from 'react'
import { Net } from './Mostt'


const Num4 = () => {
let Met=useContext(Net)
  return (
    <div>
     {Met}
    </div>
  )
}

export default Num4
