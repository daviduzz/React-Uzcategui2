import './navbar.css'
import CartWidget from '../cartwidget/cartwidget'
const Navbar = () => {
    return (
        <nav className='posicion'>
            <h1>e-lectronik</h1>
            <CartWidget/>
            <div>
                <a>link 1</a>
                <a>link 2</a>
                <a>link 3</a>
                <a>link 4</a>
            </div>
        </nav>
    )
}
export default Navbar