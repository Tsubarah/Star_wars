
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api/"


const getPeople = async () => {
  const res = await axios.get(`${BASE_URL}/people`)
}


const getPerson = async () => {
  const res = await axios.get(`${BASE_URL}/people/:id`)
}


const getFilms = async () => {
  const res = await axios.get(`${BASE_URL}/films`)
}