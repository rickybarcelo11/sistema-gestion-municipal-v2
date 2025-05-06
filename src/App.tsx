// src/App.tsx
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Aquí irán más rutas como Sectores, Trabajadores, etc. */}
      </Route>
    </Routes>
  );
}