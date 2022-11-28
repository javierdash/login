import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import swal from '@sweetalert/with-react'

const Detalle = () => {

 const token = localStorage.getItem('token')
 let query = new URLSearchParams(window.location.search) 
 let movieID = query.get('movieID') 
 //console.log(movieID)

 const [movie, setMovie] = useState(null)

 useEffect(() => { 
   const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=c5256bd6913284c73d535a2dd158d799&language=es-ES`
   axios 
    .get(endpoint) 
    .then(res => { 
      //console.log(res.data) 
      const movieData = res.data 
      setMovie(movieData) 
      }) 
      .catch(e => { 
        swal('hubo errores al intentar encontrar los datos de la pelicula') 
      })
    }, [setMovie]) 

    return ( 
    <> 
    {!token && <Redirect to="/"/>} 
    {movie && 
      <>
      <h3 className="card-title">{movie.title}</h3>
      <div className="row">
       <div className="col-4">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card image cap"/>
       </div>
            <div className="col-8">
            <p>Reseña:</p>
            <p className="card-text">{movie.overview.substring(0, 105)}...</p>
            <p>Release date:</p>
            <p> {movie.release_date}</p> 
            
            <p>Géneros:</p>
            <ul>
            {movie.genres.map((el) => <li>{el.name}</li>)} 
            </ul> 
          </div>
          </div>
      </>
    }
    </> 
    )
  }

  export default Detalle;

