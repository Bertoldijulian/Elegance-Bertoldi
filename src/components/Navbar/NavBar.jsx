import CardWidge from '../CardWidget/CardWidge'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <h1>Elegance</h1>
        <ul>
            <li><a href="#">Perfumes</a></li>
            <li><a href="#">Relojes</a></li>
            <li><a href="#">Contacto</a></li>
            <CardWidge/>
        </ul>
    </div>
  )
}

export default NavBar
