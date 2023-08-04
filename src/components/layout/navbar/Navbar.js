
import { useLocation, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Langs from '../langs/langs';
import "./Navbar.scss";
import { useState } from 'react';
const Navbar = () => {
  const {t} = useTranslation();
  const [navFix, SetNavFix] = useState(false)
  window.onscroll = () => {
    if (window.scrollY >= 102.5) {
      SetNavFix(true)
    }else{
      SetNavFix(false)
    }
  }
  const navbalinks = t("navbarlinks", {returnObjects: true})
     /*  "navbar navbar-expand-lg navbar-light " */
     const location = useLocation();
  return (
<nav className={navFix &  location.pathname === "/" ?  "navbar navbar-expand-lg navbar-light active" : "navbar navbar-expand-lg navbar-light"}>
  <div className="container">
    <a className="navbar-brand" href="/src/components/pages/Home.js"> <img className='logo' src='../images/pro-logo.png' alt='name' /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
          navbalinks.map((item)=> {
            return (
             <li className="nav-item" key={item.id}>
              <NavLink className="nav-link" to={item.href}>{item.text}</NavLink>
              </li>
            )
          })
        }
      </ul>
      <div className='langs'>
        <Langs/>
        <a href='#'>{t('order')}</a>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar