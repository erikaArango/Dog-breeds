import axios from "axios";
//funcion que lista todas las razas
const allBreeds = async (state) => {
    const request = await axios.get('https://dog.ceo/api/breed/hound/images')
    state(request.data.message)   
    console.log('soy la data',request.data.message)


}

export {
    allBreeds
}