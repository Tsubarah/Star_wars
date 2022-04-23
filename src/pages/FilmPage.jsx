import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import StarwarsAPI from "../services/StarwarsAPI"
import { getIdFromUrl } from "../helpers"


export default function FilmPage() {
  const [film, setFilm] = useState()

  const getFilms = async () => {
    const data = await StarwarsAPI.getFilms()

    setFilm(data)
    console.log(data)
  }

  useEffect(() => {
    getFilms()
    // console.log(film.results)
  }, [])
  return (
    <>
    <div className='d-flex flex-wrap justify-content-center'>
    {film && 
          film.results.map((film) =>
          <div 
          key={film.episode_id} 
          className="card border-secondary text-white bg-primary m-3 col-md-3 col-sm-4 col-xs-12"
          >
            <div className="card-header d-flex align-items-center">
              {film.title}
            </div>
            <div className="card-body">
              <h4>Attributes</h4>
              <p className="card-text">Episode: {film.episode_id}</p>
              <p className="card-text">Director: {film.director}</p>
              <p className="card-text">Producer: {film.producer}</p>
              <p className="card-text">Release date: {film.release_date}</p>
              {/* <Link to={`/characters/${index + 1}`} type="button" className="btn btn-light pt-1 pb-1">Read More</Link> */}
            <div className="list-group">
            <h4>Characters</h4>
            {film.characters.map((character, index) => {
              <Link 
              className="list-group-item col-lg-3 m-auto"
              to={`/characters/${getIdFromUrl(character)}`} 
              key={index}
              >
                Character {getIdFromUrl(character)}
              </Link>
            })}
            </div>
            </div>
          </div>
			)}

      </div>
    </>
  )
}
