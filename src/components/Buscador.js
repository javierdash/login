import React from 'react'
import swal from '@sweetalert/with-react'
import {useHistory} from 'react-router-dom'

const Buscador = () => {
  
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = e.target.buscar.value
    console.log(keyword)

    if(keyword.length < 3) {
      swal('debes ingresar al menos 3 caracteres en tu busqueda')
    }
    history.push(`/resultado/?palabra=${keyword}`)

  }

  return (
    <>
    <form onSubmit={handleSearch}>
    <label>Buscador</label>
    <input name="buscar" placeholder="ingresá tu búsqueda..."></input>
    <button type="submit">buscar</button>
    </form>
    </>
  )
}

export default Buscador