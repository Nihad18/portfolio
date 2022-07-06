import { useContext, useRef } from "react";
import MainContext from "../MainContext";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const {
    isOff,
    setIsOff,
    navbarToggle,
    setNavbarToggle,
    toggleTheme,
    theme,
    useOnClickOutside,
  } = useContext(MainContext);

  const ref = useRef();
  useOnClickOutside(ref, () => setNavbarToggle(false));
  return (
    <div className='navbar' ref={ref}>
      <div className='logo'>
        <div className='logo-text'>Portfolio</div>
        <div className='toggle-icon'>
          <input
            type='checkbox'
            name=''
            id='checkbox'
            onChange={toggleTheme}
            defaultChecked={theme === "light"}
            style={{ display: "none" }}
          />
          <label htmlFor='checkbox' onClick={() => setIsOff(!isOff)}>
            {isOff ? <BsMoonFill /> : <BsFillSunFill />}
          </label>
        </div>
      </div>

      <div
        className='navbar-toggle-icon'
        onClick={() => setNavbarToggle(!navbarToggle)}
      >
        <AiOutlineMenu />
      </div>
      <ul className={`container ${navbarToggle ? "show-navbar" : ""}`}>
        <li className='container__item'>
          <NavLink to='/' >Home</NavLink>
        </li>
        <li className='container__item'>
        <NavLink to='/about' >About</NavLink>
        </li>
        <li className='container__item'>
        <NavLink to='/skills' >Skills</NavLink>
        </li>
        <li className='container__item'>
        <NavLink to='/projects' >Projects</NavLink>
        </li>
        <li className='container__item'>
        <NavLink to='/contact' >Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
