import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
//import { allBreeds } from '../functions/functions'

const Breeds = () => {
  const [breeds, setBreeds] = useState()
  let {id} = useParams();
  console.log('soy id',id)

  /* 
  let breed = parts[0];
  let subBreed = parts[1]; */
  let subBreed = ''

  const resBreed = async (breed) => {
    if (breed !== undefined && subBreed !== undefined) {
      const resBreedSubBreed = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
      setBreeds(resBreedSubBreed.data.message);
    } else {
      const resBreed = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      setBreeds(resBreed.data.message);
    }
  };

  useEffect(()=>{
      resBreed()
  },[])

return (
  <div>
      <div class="container text-center">
      <div class="row">

      {breeds !== undefined ? (
          breeds.map(imgBreed => (
            <div class="col">
              <img   src={imgBreed} alt="" className='rounded dogImg' />
            </div>
        ))
        
        ): ('there are no dog breeds')} 

        </div>
        </div>   
  </div>
)
}

export default Breeds




//let parts = id.split(' ');




/* const Breeds = () => {
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
          
          ): ('there are no dog breeds')} 

          </div>
          </div>   
    </>
  )
}

export default Breeds */