import { useEffect, useState } from 'react'
import StarwarsAPI from '../services/StarwarsAPI'
import { Link } from 'react-router-dom'

export default function Characters() {
  const [characters, setCharacters] = useState()

  const getCharacters = async () => {
    const data = await StarwarsAPI.getCharacters()
    setCharacters(data)
  }

  useEffect(() => {
    getCharacters()
    console.log(characters)
  }, [])

  return (
    <>
      <h1>Characters</h1>
      <div className='d-flex flex-wrap justify-content-center'>

      {characters && 
          characters.results.map((character, index) =>
            	<div 
              key={index} 
              className="card border-secondary text-white bg-primary m-3 col-md-3 col-sm-4 col-xs-12"
            >
              <div className="card-header d-flex align-items-center">
                {character.name}
              </div>
              <div className="card-body">
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Born: {character.birth_year}</p>
                <p className="card-text">In: {character.films.length} films</p>
                <Link to={`/characters/${index + 1}`} type="button" className="btn btn-light pt-1 pb-1">Read More</Link>
              </div>
            </div>
			)}
      </div>
      
      <div className="buttons d-flex justify-content-between">
        <button type="button" className="btn btn-primary">Back</button>
        <button type="button" className="btn btn-primary">Next</button>
      </div>

    </>
  )
}
