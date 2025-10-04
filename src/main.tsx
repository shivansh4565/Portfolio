// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "./Components/Navbar/Navbar.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Navbar/>
    <App />
  </BrowserRouter>
)
