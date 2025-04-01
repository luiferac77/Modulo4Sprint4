import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const PersonajeContext = createContext();

export const usePersonajeContext = () => {
    return useContext(PersonajeContext)
};

export const PersonajeProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const buscarPersonajes = async (nombre) => {
        setLoading(true);
        setError('');
        setPersonajes([]); // Limpia personajes antes de la nueva búsqueda
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
            setPersonajes(response.data.results);
        } catch (error) {
            setError('Error al recuperar los datos');
        } finally {
            setLoading(false);
        }
    }

    return (
        <PersonajeContext.Provider value={{ personajes, loading, error, buscarPersonajes}}>
            {children}
        </PersonajeContext.Provider>
    );
};