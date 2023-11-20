import "./navbar.scss";
import linkdin from '../../images/linkdin.png'
import instagram from '../../images/instagram.png'
import github from '../../images/github.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Desenvolvido por Leonardo Brancaglione</span>
        <div className="social">
          <a href="https://github.com/LBrancaglione">
            <img src={github} alt="Github logo" />
          </a>
          <a href="https://www.instagram.com/leonardobrancaglione/">
            <img src={instagram} alt="Instagram Logo" />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-brancaglione">
            <img src={linkdin} alt="Linkdin logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
