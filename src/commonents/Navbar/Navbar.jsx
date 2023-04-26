import logo from "../../assets/logo.png"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <span>STILLS</span>
        <span>MOTION</span>
        <span>ABOUT</span>
      </div>
      <div className="middle">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <span>INSTAGRAM</span>
        <span>EMAIL</span>
        <span>F/1.4</span>
      </div>
    </div>
  )
}

export default Navbar