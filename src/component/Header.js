import './heaer.css'
import logo from './assests/img.png'
const Header = () => {
  return (
    <nav className='nav-heading'>
      <img className='home-img' src ={logo} alt ="logo"></img>
      <nav>
        <ul className="nav-links">
          <a className='heading-link' href="/home">Home</a>
          <a className='heading-link' href="/about">About</a>
        {/* <a className='heading-link' href="#home">Home</a>
        <a className='heading-link' href="#home">Home</a> */}
        </ul>
      </nav>

    </nav>

    )
};


export default Header;