import { useState, useEffect } from 'react'
import StarwarsAPI from "../services/StarwarsAPI"

export default function Films() {
  const [data, setData] = useState()
  

  const getFilms = async () => {
    const res = await StarwarsAPI.getFilms()
    setData(res)
  }

  useEffect(() => {
    getFilms()
    console.log(data)
  }, [])

  return (
    <>
      <h1>Films</h1>

      {data && (
				<div className="list-group">
					{data.results.map((films, index) =>
						<div key={index} className="card text-white bg-primary mb-3">
              <div className="card-header">{films.title}</div>
              <div className="card-body">
                <p className="card-text">Episode: {films.episode_id}</p>
                <p className="card-text">Released: {films.release_date}</p>
                <p className="card-text">{films.characters.length} characters</p>
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
