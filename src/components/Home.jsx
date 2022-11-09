import React from 'react'
import perros from '../img/perros.png'
import Dogs from './Dogs'

const Home = () => {
  return (
    <div className='home'>
      <h2>Are you ready to see dog BREEDS and SUB-BREEDS with a click?</h2>
      <h3>Select the breed or sub-breed you want to see</h3>
      <Dogs/>
      <img  src={perros} alt="" className='dogs' />
    </div>
  )
}

export default Home