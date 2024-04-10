import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
        { name: 'About', path: '/about'},
        { name: 'Contact', path: '/contact'},
        { name: 'Login', path: '/login'},
        { name: 'Register', path: '/register'},
    ]
  return (
    <nav className='navbar-container'>
        <h1>LOGO</h1>
        <div className='navbar-links'>
            {links.map((link, index) => {
                return (
                    <Link key={index} to={link.path}>{link.name}</Link>
                )
            })}
        </div>

        <div className='hamburger-menu'>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar