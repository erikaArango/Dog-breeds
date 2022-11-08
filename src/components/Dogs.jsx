import React,{useEffect, useState, } from 'react'
import axios from "axios"

const Dogs = () => {
    const [dogBreeds, setDogBreeds] = useState([])
    const apiBreeds  = async () => { 
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');
      console.log('list all',res.data.message)
      Object.entries(res.data.message).map(([key,value]) =>{
        if (value.length > 0) {
          value.map((item) => {
            setDogBreeds((dogBreeds) => [...dogBreeds, `${key} ${item}`]);
          });
        } else {
          setDogBreeds((dogBreeds) => [...dogBreeds,key]);
        }
        console.log('key,value',key,value);
      });
    };


    useEffect(()=>{
        apiBreeds()
    },[setDogBreeds]);

  return (
        <div class="container text-center">
        <div class="row">
          {dogBreeds &&
          dogBreeds.map(imgBreed => (
            <div class="col">
              <a href="#">{dogBreeds}</a>
            </div>
              ))
          }
        </div>
        </div>   
  )
}

export default Dogs

