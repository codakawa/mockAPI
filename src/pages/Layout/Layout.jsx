import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
// import logo-header from "../../images/logo-header.svg"
import logo from "../../images/logo-header.svg"
import burgerMenuImg from "../../images/burger-menu-btn.svg"
import { NavLink} from 'react-router-dom';

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <header>
            <div className="logo">
                <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="navigateLinks">
                <NavLink to={"/"}>Главная</NavLink>
                <NavLink to={"/news"}>Новости</NavLink>
                <NavLink to={"/libriary"}>Библиотека</NavLink>
                <NavLink to={"/mylibriary"}>Моя библиотека</NavLink>
            </div>
            <div className="burgerMenuBtn" onClick={(e) => {
                setShowMenu(!showMenu)
            }}> 
                <img src={burgerMenuImg} alt="" />
            </div>
            <div className={showMenu ? "menu" : "notShow"} onClick={(e) => {
                if(e.target.className === "menu") setShowMenu(!showMenu)
            }}>
                <div className="menuInner">
                    <h2>SIDEMENU</h2>
                </div>
            </div>
        </header>

        <Outlet/>
    </>
  )
}

export default Layout