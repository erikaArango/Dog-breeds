import axios from "axios";
 
 //funcion que lista  las imagenes de Sabuesos
const allBreeds = async (state) => {
    const request = await axios.get('https://dog.ceo/api/breed/hound/images')
    state(request.data.message)   
}

export {
    allBreeds
}