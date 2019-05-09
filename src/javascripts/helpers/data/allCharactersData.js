import axios from 'axios';

const getAllCharactersData = () => axios.get('../db/all-characters.json');

export default { getAllCharactersData };
