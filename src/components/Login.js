import React from 'react'
import swal from '@sweetalert/with-react'
import axios from 'axios';
import {useHistory, Redirect} from 'react-router-dom'

const Login = () => {
 
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const history = useHistory()
  const token = localStorage.getItem('token')
  const endpoint = 'http://challenge-react.alkemy.org/'

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    if(email === "" || password === "") {
      swal(<h2>Los campos no pueden estar vacios</h2>)
      return;
    }

    if(!regex.test(email)) {
      swal("Debes ingresar un mail válido")
      return;
    }

    if(email !== 'challenge@alkemy.org' || password!== "react") {
      swal("Los datos ingresados no son correctos")
      return;
    }

    axios
      .post(endpoint, {email, password})
      .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        history.push('/listado')
      })
      .catch(e => {
        swal("hubo errores, intenta luego")
      })      
  }

  return (
    <>
    {token && <Redirect to="/listado"/>}
    <h3>Para acceder por favor ingresá los datos solicitados:</h3>
    <form onSubmit={handleSubmit}>
      <label>Ingresá tu email</label>
      <input type="text" name="email"></input> <br />
      <label>Ingresá tu contraseña</label>
      <input type="text" name="password"></input> <br />
      <button>enviar</button>
    </form>
    </>
  )
}

export default Login