import React, { useState, useContext } from "react";
import { toast } from 'react-toastify';
import { usePersonajeContext } from "../context/PersonajeContext";

const PersonajesForm = () => {
    const [nombre, setNombre] = useState('');
    const { loading, error, buscarPersonajes } = usePersonajeContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            toast.error("Por favor, ingresa el nombre del personaje");
            return;
        }

        buscarPersonajes(nombre.trim()); // Realiza la búsqueda
        setNombre(''); // Limpia el campo
        toast.success("Búsqueda realizada");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Buscar personaje"
                className="border p-2"
            />
            <button
                type="submit"
                className={`bg-blue-500 text-white p-2 ml-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
            
            
        </form>
    );
};

export default PersonajesForm;