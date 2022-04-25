
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api"


const sleep = async delay => new Promise(r => setTimeout(r, delay))


const getCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/people`)
  return res.data
}


const getCharacter = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data

  } catch (err) {
    throw err.message
  }
}

const getFilms = async () => {
  const res = await axios.get(`${BASE_URL}/films`)
  return res.data
}

const getFilm = async (id) => {
  const res = await axios.get(`${BASE_URL}/films/${id}`)
  return res.data
}

export default {
  getCharacters,
  getCharacter,
  getFilms,
  getFilm
}