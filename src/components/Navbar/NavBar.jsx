import CardWidge from '../CardWidget/CardWidge'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <h1>Logo</h1>
        <ul>
            <li><a href="#">Calleras y pouch</a></li>
            <li><a href="#">Calzas</a></li>
            <li><a href="#">Remeras</a></li>
            <CardWidge/>
        </ul>
    </div>
  )
}

export default NavBar
