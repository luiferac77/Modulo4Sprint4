import React from 'react';
import { PersonajeProvider } from './context/PersonajeContext';
import PersonajesForm from './components/PersonajesForm';
import PersonajesCard from './components/PersonajesCard';
import HeaderPersonajes from './components/HeaderPersonajes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { FavoritosProvider } from './context/FavoritosContext';

function App() {
 
  return (
    <PersonajeProvider>
      <FavoritosProvider>
      <div className=''> 
        <HeaderPersonajes />
        <PersonajesForm />
        <PersonajesCard />
        <ToastContainer />
      </div>
      </FavoritosProvider>
    </PersonajeProvider>
  )
}

export default App
