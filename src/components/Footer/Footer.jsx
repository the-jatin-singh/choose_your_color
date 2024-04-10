import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <h1>LOGO</h1>
        <div className='footer-links'>
            <Link to='/'>About</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Partners</Link>
        </div>
    </div>
  )
}

export default Footer