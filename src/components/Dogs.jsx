import React,{useEffect, useState, } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


const Dogs = () => {
    const [dogBreeds, setDogBreeds] = useState([])
    let {id} = useParams();
    const apiBreeds  = async () => { 
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');
      Object.entries(res.data.message).map(([key,value]) =>{
        if (value.length > 0) {
          value.map((item) => {
            setDogBreeds((dogBreeds) => [...dogBreeds, `${key} ${item}`]);
          });
        } else {
          setDogBreeds((dogBreeds) => [...dogBreeds,key]);
        }

      });
    };

    useEffect(()=>{
        apiBreeds()
    },[setDogBreeds]);

    const change = event => {
      console.log('event',event.target.value)
    }

  return (
        <div class="row">
          <select class="form-select" onChange = {change} aria-label="Default select example">
            {dogBreeds &&
            dogBreeds.map(imgBreed => (
            <option selected value = {imgBreed} >{imgBreed}</option>
            ))
            }
          </select>
        </div>
  )
}

export default Dogs

