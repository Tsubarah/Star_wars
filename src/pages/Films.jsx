import { useState, useEffect } from 'react'
import StarwarsAPI from "../services/StarwarsAPI"

export default function Films() {
  const [films, setFilms] = useState()
  

  const getFilms = async () => {
    const data = await StarwarsAPI.getFilms()
    setFilms(data)
    console.log(data)
  }

  useEffect(() => {
    getFilms()
  }, [])

  return (
    <>
      <h1>Films</h1>
    </>
  )
}
