
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api"


// const sleep = async delay => new Promise(r => setTimeout(r, delay))


const getCharacters = async (page) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data

  } catch (err) {
    return err.response.status
  }
}


const getCharacter = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data

  } catch (err) {
    return err.response.status
  }
}

const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/filmss`)
    return res.data
}

const getFilm = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data

  } catch (err) {
    return err.response.status
  }
}

const exportedObjects = {
  getCharacters,
  getCharacter,
  getFilms,
  getFilm
};

export default exportedObjects