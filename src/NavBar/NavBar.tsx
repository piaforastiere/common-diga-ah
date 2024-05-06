import React from 'react';

// import { AiOutlineAppstore } from 'react-icons/ai'
// import { Link, NavLink } from 'react-router-dom'

// import logo from '../../assets/logo.png'
// import bitacora from '../../assets/logo.png'
// import rutina from '../../assets/logo.png'
// import grabaciones from '../../assets/logo.png'
// import setting from '../../assets/logo.png'

import {
  // NavBarContainer,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from './styles';

// import Help from "./Help";

export default function NavBar({ userType }: { userType: string }) {
  // const [activePath, setActivePath] = useState('')

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/about">
          About Us
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact Us
        </NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
    // <NavBarContainer admin={userType === "admin" ? true : false}>
    // 	<div className="row">
    // 		<Link className="logo" to="/">
    // 			<img src={logo} alt="Diga-ah!" />
    // 			Diga-ah!
    // 		</Link>
    // 	</div>
    // 	<div className="row menu-items">
    // 		<ul style={{ marginBottom: 0 }}>
    // 			<div className="menu-hidden">Menu</div>
    // 			{userType === "admin" ? (
    // 				<li
    // 					className={
    // 						activePath === "administration" ? "active" : undefined
    // 					}>
    // 					<NavLink
    // 						to="administration"
    // 						className={({ isActive }) =>
    // 							isActive && setActivePath("administration")
    // 						}>
    // 						<span>
    // 							<AiOutlineAppstore />
    // 						</span>
    // 						Administración
    // 					</NavLink>
    // 				</li>
    // 			) : (
    // 				<>
    // 					<li className={activePath === "dashboard" ? "active" : undefined}>
    // 						<NavLink
    // 							to="dashboard"
    // 							className={({ isActive }) =>
    // 								isActive && setActivePath("dashboard")
    // 							}>
    // 							<span>
    // 								<AiOutlineAppstore />
    // 							</span>
    // 							Principal
    // 						</NavLink>
    // 					</li>
    // 					<li className={activePath === "home" ? "active" : undefined}>
    // 						<NavLink
    // 							to="home"
    // 							className={({ isActive }) =>
    // 								isActive && setActivePath("home")
    // 							}>
    // 							<span>
    // 								<img src={rutina} alt="" />
    // 							</span>
    // 							home
    // 						</NavLink>
    // 					</li>
    // 				</>
    // 			)}
    // 		</ul>
    // 		{/* <Help /> */}
    // 	</div>
    // </NavBarContainer>
  );
}
