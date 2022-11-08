import React,{useEffect, useState} from 'react'
import { allBreeds, all } from '../functions/functions'

const Breeds = () => {
    const [dogBreeds, setDogBreeds] = useState(null)

 
    useEffect(()=>{
        allBreeds(setDogBreeds)
    },[])

  return (
    <>
        <div class="container text-center">
        <div class="row">

        {dogBreeds != null ? (

          dogBreeds.map(imgBreed => (
                
              <div class="col">
                    <img   src={imgBreed} alt="" className='rounded dogImg' />
              </div>
          ))
          
          ): ('there are no dog breeds')} 

          </div>
          </div>   
    </>
  )
}

export default Breeds