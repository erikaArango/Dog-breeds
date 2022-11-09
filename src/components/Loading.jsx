import React from 'react'
import load  from '../img/load.png'


const Loading = () => {
    return (
      <div className='loading'>
        
        <img  src={load} alt="" className='loadImg' />
        <h1>Loading...</h1>

      </div>
    )
  }
  
  export default Loading
