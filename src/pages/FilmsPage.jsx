import { useState, useEffect } from 'react'
import StarwarsAPI from "../services/StarwarsAPI"
import NotFound from './NotFound'
import Loading from '../components/Loading'

export default function Films() {
  const [films, setFilms] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

  const getFilms = async () => {
    setLoading(true)

    try {
      const data = await StarwarsAPI.getFilms()
      setFilms(data)
      setError(null)
      setLoading(false)

    } catch (err) {
      setError(true)
    }
  }

  useEffect(() => {
    getFilms()

  }, [])

  return (
    <>

      {loading && <Loading />}

      {error && <NotFound />}

      <h1>Films</h1>

      {films && (
				<div className="list-group">
					{films.results.map((film, index) =>
						<div key={index} className="card text-white bg-primary mb-3">
              <div className="card-header">{film.title}</div>
              <div className="card-body">
                <p className="card-text">Episode: {film.episode_id}</p>
                <p className="card-text">Released: {film.release_date}</p>
                <p className="card-text">{film.characters.length} characters</p>
            </div>
        </div>
					)}
				</div>
			)}
      
      <div className="buttons d-flex justify-content-between">
        <button type="button" className="btn btn-primary">Back</button>
        <button type="button" className="btn btn-primary">Next</button>
      </div>

    </>
  )
}
