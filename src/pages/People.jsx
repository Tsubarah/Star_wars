import { useEffect, useState } from 'react'
import StarwarsAPI from '../services/StarwarsAPI'

export default function People() {
  const [data, setData] = useState()

  const getPeople = async () => {
    const res = await StarwarsAPI.getPeople()
    setData(res)
  }

  useEffect(() => {
    getPeople()
    console.log(data)
  }, [])

  return (
    <>
      <h1>People</h1>

      {data && (
				<div className="list-group">
					{data.results.map((character, index) =>
						<div key={index} className="card text-white bg-primary mb-3">
              <div className="card-header">{character.name}</div>
              <div className="card-body">
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Born: {character.born}</p>
                <p className="card-text">In: {character.films.length} Films</p>
            </div>
        </div>
					)}
				</div>
			)}
      
      <div className="buttons d-flex justify-content-between">
        <button type="button" class="btn btn-primary">Back</button>
        <button type="button" class="btn btn-primary">Next</button>
      </div>

    </>
  )
}
