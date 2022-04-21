import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarwarsAPI from '../services/StarwarsAPI'

export default function People() {
  const [people, setPeople] = useState()
  const [results, setResults] = useState()

  const getPeople = async () => {
    const data = await StarwarsAPI.getPeople()
    setPeople(data)
    console.log(data)
    console.log(data.results)
  }

  const getNames = () => {
    const result = people.result
    const names = result.map(character => {
      return character.name
    })

    setResults(names)
  }
  

  useEffect(() => {
    getPeople()

  }, [])

  return (
    <>
      <h1>People</h1>
			{people > 0 && (
				<ListGroup className="peopleList">
					{people.map(character =>
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
