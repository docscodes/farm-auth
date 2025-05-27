import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header className="flex justify-between items-center m-4 h-16 text-blue-800 border-b-2">
      <Link to="/" className="logo flex items-center gap-2 text-2xl">
        <img src={Logo} alt="Logo" />
        <span>FARM</span>
      </Link>
      <nav className="flex items-center gap-4 text-xl">
        <NavLink to="/" end>Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/cars">Cars</NavLink>
      </nav>
    </header>
  );
};
