import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import StarwarsAPI from "../services/StarwarsAPI"
import { getIdFromUrl } from "../helpers"
import NotFound from "./NotFound"
import Loading from "../components/Loading"


export default function FilmDetailsPage() {
  const [film, setFilm] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { id } = useParams()

  const getFilm = async () => {
    setLoading(true)

    try {
      const data = await StarwarsAPI.getFilm(id)
      setFilm(data)
      console.log(data)
      setError(null)
      setLoading(false)

    } catch (err) {
      setError(true)
    }
  }

  useEffect(() => {
    getFilm(id)
  }, [id])
  
  return (
    <>

    {loading && <Loading />}

    {error && <NotFound />}

    <div className='d-flex flex-wrap justify-content-center'>
      {film && 
        <div key={id} className="card border-secondary text-white bg-primary m-3 col-md-3 col-sm-4 col-xs-12">
          <div className="card-header d-flex align-items-center">
            {film.title}
          </div>
          <div className="card-body">
            <h4>Attributes</h4>
            <p className="card-text">Episode: {film.episode_id}</p>
            <p className="card-text">Director: {film.director}</p>
            <p className="card-text">Producer: {film.producer}</p>
            <p className="card-text">Release date: {film.release_date}</p>

            <h4 className="pt-4">Characters</h4>
            <div className="list-group">
              {film.characters.map((character, index) => 
                <Link 
                className="list-group-item"
                to={`/characters/${getIdFromUrl(character)}`} 
                key={index}
                >
                  Character {getIdFromUrl(character)}
                </Link>
              )}
            </div>
          </div>
        </div>
      }
    </div>
    
    </>
  )
}
