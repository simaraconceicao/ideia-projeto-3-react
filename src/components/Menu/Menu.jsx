import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () =>{
  return(
    <ul className="menu">
      <li className='item'>
        <Link className="link" to="/">Home</Link>
      </li>
      <li className='item'>
        <Link  className="link" to="/about">Sobre</Link>
      </li>
      <li className='item'>
        <Link className="link" to="/projects">Projetos</Link>
      </li>
      <li className='item'>
        <Link className="link" to="/comentarios">Comentários</Link>
      </li>
    </ul>
  )
}

export default Menu