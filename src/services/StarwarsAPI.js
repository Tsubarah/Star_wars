
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api/"


const sleep = async delay => new Promise(r => setTimeout(r, delay))


const getPeople = async () => {
  const res = await axios.get(`${BASE_URL}/people`)
  return res.data
}


const getPerson = async (id) => {
  const res = await axios.get(`${BASE_URL}/people/:id`)
  return res.data
}


const getFilms = async () => {
  const res = await axios.get(`${BASE_URL}/films`)
  return res.data
}

export default {
  getPeople,
  getPerson,
  getFilms
}