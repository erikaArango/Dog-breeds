import React,{useEffect, useState} from 'react'
import { allBreeds } from '../functions/functions'

const Home = () => {
    const [dogBreeds, setDogBreeds] = useState(null)

    useEffect(()=>{
        allBreeds(setDogBreeds)
    },[])

  return (
    <>
        {dogBreeds != null ? ('there are dog breeds'): ('there are no dog breeds')}
    
    </>
  )
}

export default Home