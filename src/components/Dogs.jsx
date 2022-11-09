import React,{useEffect, useState, } from 'react';
import Dog from './Dog'

const Dogs = () => {
    const [breeds, setBreeds] = useState([])
    const [show, setShow] = useState([])

    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((data) => {
          setBreeds(data.message)
          setShow(data.message)
        })
    }, []);
   
    const handleChange = (event) => {
      setShow({})
      if(event.target.value == 'all') {
        setShow(breeds)
      }else {
        const obj = {}
        obj[event.target.value] = []
        setShow(obj)
      }
    };
    

  return (
        <div className="row">

          <select className="form-select" onChange={handleChange} aria-label="Default select example">
            <option selected value= "all">TODOS</option>
            {Object.keys(breeds).map((breed, subBreeds) => {
            return (
              <option key={breed} value={breed}>{breed}</option>
            );
          })}
          </select>

        </div>
              <h1>Listado</h1>
        <div>
        {Object.keys(show).map((breed, subBreeds) => {
          if(show[breed].length > 0) {
              for(const i in show[breed]) {
                return ( 
                  <Dog breed={breed} subbreed={show[breed][i]} />
                )
              }
          }else {
            return ( 
              <Dog breed={breed} />
            )
          }
        })}
      </div>
             
  )
}

export default Dogs

