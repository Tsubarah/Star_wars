import { useState, useEffect } from 'react'
import StarwarsAPI from "../services/StarwarsAPI"
import { useSearchParams, Link } from 'react-router-dom'
import NotFound from './NotFound'
import Loading from '../components/Loading'
import { getIdFromUrl } from '../helpers'

export default function Films() {
  const [films, setFilms] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  

  const fetchFilms = async () => {
    setLoading(true)

    const data = await StarwarsAPI.getFilms(page)
    setFilms(data)
    setLoading(false)
    console.log(data)

  }

  useEffect(() => {
    fetchFilms()

  }, [page])

  return (
    <>

      {loading && <Loading />}

      {films === 404 && <NotFound />}

      <div className='d-flex flex-wrap justify-content-center list-group'>
        {films && 
            films.results.map(film => (
              <div key={film.episode_id} className="card text-white bg-primary mb-3">
                <div className="card-header"><h4>{film.title}</h4></div>
                <div className="card-body">
                  <p className="card-text">Episode: {film.episode_id}</p>
                  <p className="card-text">Released: {film.release_date}</p>
                  <p className="card-text">{film.characters.length} characters</p>

                  <Link to={`/films/${getIdFromUrl(film.url)}`}>
									<button type='button' className='btn btn-dark pt-1 pb-1 pr-2 pl-2'>
										Read more
									</button>
								</Link>
                </div>
              </div>
            ))}
      </div>
    </>
  )
}
