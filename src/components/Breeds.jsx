import React,{useEffect, useState} from 'react'
import { allBreeds } from '../functions/functions'

const Breeds = () => {
    const [dogBreeds, setDogBreeds] = useState(null)

    useEffect(()=>{
        allBreeds(setDogBreeds)
    },[])

  return (
    <>
      {dogBreeds != null ? (
          allBreeds.map(imgBreed => (
                <div>
                    <img src={imgBreed} alt="" />
                </div>
          ))
            


          ): ('there are no dog breeds')}    
    </>
  )
}

export default Breeds