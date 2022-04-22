import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarwarsAPI from '../services/StarwarsAPI'

export default function People() {
  const [data, setData] = useState()
  const [people, setPeople] = useState([])

  const getPeople = async () => {
    const res = await StarwarsAPI.getPeople()
    const characters = res.results
    setData(res)
    setPeople(characters)
    console.log(data)
    console.log(people)
  }

  // const getNames = () => {
  //   const result = data.result
  //   const names = result.map(character => {
  //     return character.name
  //   })
  //   console.log(data.result)
  // }

  useEffect(() => {
    getPeople()
    console.log(data)
  }, [])

  return (
    <>
      <h1>People</h1>
			{data > 0 && (
				<ListGroup className="peopleList">
					{data.map(character =>
						<ListGroup.Item
							action
							as={Link}
							key={character.id}
							// to={`/todos/${character.id}`}
						>
							{character.name}
						</ListGroup.Item>
					)}
				</ListGroup>
			)}
      
    </>
  )
}
