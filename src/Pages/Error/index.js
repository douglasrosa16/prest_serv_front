import {Link} from 'react-router-dom';

import './styles.css'

export default function Error(){
  return (
    <div className="container">
      <span id="message">Página não encontrada :(</span>      
      <div>
        <Link to={"/"} className="btn-inicio" type="button">
          Inicio
        </Link>
      </div>
    </div>
  )
}