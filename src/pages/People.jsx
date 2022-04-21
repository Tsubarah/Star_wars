import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarwarsAPI from '../services/StarwarsAPI'

export default function People() {

  const [people, setPeople] = useState()
  const { id } = useParams()

  const getPeople = async () => {
    const data = await StarwarsAPI.getPeople()
    setPeople(data)
    console.log(data)
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <>
      <h1>People</h1>
    </>
  )
}
