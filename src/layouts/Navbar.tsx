import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🌍 Gestión Municipal</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Inicio</Link>
          <Link to="/sectores" className="hover:text-gray-300">Sectores</Link>
          <Link to="/trabajadores" className="hover:text-gray-300">Trabajadores</Link>
          <Link to="/arboles" className="hover:text-gray-300">Árboles</Link>
          <Link to="/informes" className="hover:text-gray-300">Informes</Link>
        </div>
      </div>
    </nav>
  );
}