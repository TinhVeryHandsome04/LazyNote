import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.png';
export const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo-and-company">
                <div className="company-name">
                   LazyNote 
                </div>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div> 
            </div>
            <div className="log-reg">
                <div className="register">
                    <a href=""/*<--đưa đường dẫn vào*/>Đăng ký</a>
                </div>
                <div className="login">
                    <div className="login2">
                        <a href=""/*<--đưa đường dẫn vào*/>Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
