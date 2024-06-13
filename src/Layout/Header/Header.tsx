import Navbar from "../../Components/Navbar/Navbar";
import { NavLinkModel } from "../../Models/core.model";
import "./Header.css";

interface HeaderProps {
  title: string;
  navLinkData: NavLinkModel[];
}

function Header({ title, navLinkData }: HeaderProps) {
  return (
    <section className="Header">
      <h1>{title}</h1>
      <Navbar title={title} navLinkData={navLinkData} />
    </section>
  );
}

export default Header;
