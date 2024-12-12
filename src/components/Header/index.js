import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </Link>
  </nav>
)
export default Header
