import './Footer.css';
import copyright from '../../images/copyright-icon.png';
import Logo from '../../images/Logo.png';
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo-and-company">
          <div className="company-name">
            LazyNote 
          </div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div> 
        </div>
        <div className="hidden-frame"></div>
        <div className="copyright">
          <div className="copyright-icon">
            <img src={copyright}/>
          </div>
          <div className="copyright-text">
            2025 LazyNote. All rights reserved
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;