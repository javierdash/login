import {Redirect, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../estilos.css'

const Listado = () => {
  
  const token = localStorage.getItem('token')

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=c5256bd6913284c73d535a2dd158d799&language=es-ES"
    axios
      .get(endpoint)
      .then(res => {
        //console.log(res.data.results)
        const apiData = res.data.results
        setMoviesList(apiData)
      })
    }, [])
  

  return (
    <>
    {!token && <Redirect to="/"/>}
    <div className="row">
    {moviesList.map((el) => {
      return(
        <div className="col-3">
        <div className="card">
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

export default Listado