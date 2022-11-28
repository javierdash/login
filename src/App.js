import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Listado from './components/Listado'
import Header from './components/Header'
import Detalle from './components/Detalle'
import Resultado from './components/Resultado'

import './css/bootstrap.min.css'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/listado" component={Listado}/>
      <Route path="/detalle" component={Detalle}/>
      <Route path="/resultado" component={Resultado}/>
    </Switch>
    </>
  );
}

export default App;
