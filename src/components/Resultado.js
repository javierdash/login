import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Resultado = () => {
  
  const query = new URLSearchParams(window.location.search)
  let palabraBuscada = query.get('palabra') 
  console.log(palabraBuscada)

  const [results, setResults] = useState([])

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?query=${palabraBuscada}&api_key=c5256bd6913284c73d535a2dd158d799&language=es-ES`
    axios
      .get(endpoint)
      .then(res => {
        const apiResponse = res.data.results
        console.log(apiResponse)
        setResults(apiResponse)
      })   
    
    }, [palabraBuscada])
  
  return (
    <>
    <div className="row">
    {results.map((el) => {
      return(
        <div className="col-4">
        <div className="card my-4">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{el.title.substring(0, 25)}</h5>
        <p className="card-text">{el.overview.substring(0, 105)}...</p>
        <Link to={`/detalle/?movieID=${el.id}`} className="btn btn-primary">Detalle</Link>
        </div>
      </div>
      </div>
      )
    }
    )}
    </div>
    </>
  )
}

export default Resultado;