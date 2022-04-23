import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StarwarsAPI from '../services/StarwarsAPI'
import { getIdFromUrl } from '../helpers'


export default function CharacterDetailsPage() {
  const [character, setCharacter] = useState()
  const { id } = useParams()

  const getCharacter = async (id) => {
    const data = await StarwarsAPI.getCharacter(id)
    setCharacter(data)
    console.log(data)
  }

  
  useEffect(() => {
    getCharacter(id)

  }, [id])

  return (
    <>
      <h1>Character Details</h1>

      {character &&  
        <div className="card text-white bg-primary mb-3">
          <div className="card-header"><h2>{character.name}</h2></div>
            <div className="card-body">
              <h4 className="card-title">Attributes</h4>
              <p className="card-text">Gender: {character.gender}</p>
              <p className="card-text">Birth year: {character.birth_year}</p>
              <p className="card-text">Height: {character.height}</p>
              <p className="card-text">Mass: {character.mass}</p>
              <p className="card-text">Hair color: {character.hair_color}</p>
              <p className="card-text">Skin color: {character.skin_color}</p>
              <p className="card-text">Eye color: {character.eye_color}</p>
              
              <h4 className="pt-4">Films</h4>
              <div className="list-group">
              {character.films.map((film, index) => 
                <Link 
                className="list-group-item col-lg-3 m-auto"
                  to={`/films/${getIdFromUrl(film)}`} 
                  key={index}
                >
                  Film {getIdFromUrl(film)}
                </Link>
            )}
              </div>
            
            </div>
          </div> 
      }
      
    </>

  )
}
