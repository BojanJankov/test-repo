import { NavLink } from "react-router-dom";
import { NavLinkModel } from "../../Models/core.model";
import "./Navbar.css";

interface NavbarProps {
  title: string;
  navLinkData: NavLinkModel[];
}

function Navbar({ navLinkData }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {navLinkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
