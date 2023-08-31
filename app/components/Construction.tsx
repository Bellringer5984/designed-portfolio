import React from 'react'
import {MdConstruction} from 'react-icons/md'

function Construction() {
  return (
    <div className='flex justify-center'>
        <div className='flex justify-center items-center'>
            <MdConstruction className="text-9xl text-orange-600"/>
            <div className="text-3xl ">Under Construction</div>
        </div>
    </div>
  )
}

export default Construction