import { useState, useEffect } from 'react'
import './App.css'

function imgDog(props) {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/' + props.breed + '/images')
      .then((response) => response.json())
      .then((data) => {
        setImages(data.message)
      })
  }, []);

  return (
    <div className="card">
        <img style={{width:'200px', display: 'flex'}} src={images[0] className='rounded dogImg' } />
        {props.breed} 
    </div>
  )
}

export default imgDog
