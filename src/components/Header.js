import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo'></img>
      <span className='icon-container'>
        <FontAwesomeIcon icon='magnifying-glass' className='icon' />
      </span>

      <input type='text' placeholder='Recherche des articles' />

      <button>S'inscrire</button>
      <button>Se connecter</button>
    </div>
  );
};

export default Header;
