import axios from "axios";
//funcion que lista todas las razas
const allBreeds = async (state) => {
    const request = await axios.get('https://dog.ceo/api/breeds/list/all')
    state(request.data.message)

}

export {
    allBreeds
}