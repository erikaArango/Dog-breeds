import React,{useEffect, useState} from 'react'
import { allBreeds } from '../functions/functions'
import Loading from './Loading'

const Breeds = () => {
    const [breeds, setBreeds] = useState(null)


    useEffect(()=>{
        allBreeds(setBreeds)
    },[])

  return (
    <>
        <div class="container text-center">
        <div class="row">

        {breeds != null ? (
            breeds.map(imgBreed => (
              <div class="col">
                 <img   src={imgBreed} alt="" className='rounded dogImg' />
              </div>
          ))

          ): <Loading/>} 

          </div>
          </div>   
    </>
  )
}

export default Breeds