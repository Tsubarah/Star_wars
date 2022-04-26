import { useEffect, useState } from 'react'
import StarwarsAPI from '../services/StarwarsAPI'
import { Link, useSearchParams } from 'react-router-dom'
import NotFound from './NotFound'
import Loading from '../components/Loading'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [searchParams, setSearchparams] = useSearchParams()
  
  const fetchCharacters = async () => {
    setLoading(true)

    const data = await StarwarsAPI.getCharacters(page)
    setCharacters(data)
    setLoading(false)
    
    setSearchparams({ page: page })

  }

  useEffect(() => {
    fetchCharacters()
    console.log(characters)
    
  }, [page])

  return (
    <>

      {loading && <Loading />}

      {characters === 404 && <NotFound />}

      <h1>Characters</h1>

      <div className='d-flex flex-wrap justify-content-center'>
        {!loading && 
            characters.results.map((character, index) => (
                <div 
                key={index} 
                className="card border-secondary text-white bg-primary m-3 col-md-2 col-sm-4 col-xs-12"
              >
                <div className="card-header d-flex justify-content-center">
                  {character.name}
                </div>
                <div className="card-body">
                  <p className="card-text">Gender: {character.gender}</p>
                  <p className="card-text">Born: {character.birth_year}</p>
                  <p className="card-text">In: {character.films.length} films</p>
                  <Link to={`/characters/${index + 1}`} type="button" className="btn btn-light pt-1 pb-1">Read More</Link>
                </div>
              </div>
            ))}
      </div>
      
      <div className="buttons d-flex justify-content-between">
        <button 
          disabled={page === 1}
          type="button" 
          className="btn btn-primary"
          onClick={() => setPage(prevValue => prevValue - 1)}
        >Back</button>

        <button 
          disabled={characters.results.length < 9}
          type="button" 
          className="btn btn-primary"
          onClick={() => setPage(prevValue => prevValue + 1)}
        >Next</button>
      </div>

    </>
  )
}
