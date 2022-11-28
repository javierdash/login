import { Link } from 'react-router-dom'
import '../estilos.css'
import Buscador from './Buscador'

const Header = () => {

  const token = localStorage.getItem('token')

  return (
    <header>
      <nav>
        <ul>
          {token && <Link to="/" className="linkkk">Home</Link>}
          {token && <Link to="/listado" className="linkkk">Listado</Link>}
          {token && <Link to="/contacto" className="linkkk">Contacto</Link>}
          {token && <Buscador />}
        </ul>
      </nav>
    </header>
  )
}

export default Header