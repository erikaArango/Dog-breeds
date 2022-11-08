import React from 'react'
import perros from '../img/perros.png'

const Home = () => {
  return (
    <div className='home'>
      <h2>Are you ready to know all dog breeds and sub-breeds with a click?</h2>
      <img  src={perros} alt="" className='dogs' />
    </div>
  )
}

export default Home