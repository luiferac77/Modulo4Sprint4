import React, { useState} from "react";
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
        <>
            <div className="flex container w-full mx-auto mt-10 mb-4 justify-center">
                <form onSubmit={handleSubmit} className="flex border rounded-2xl border-gray-500 p-1 bg-gray-600 w-2xl">
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Buscar personaje"
                        className="px-2 py-2.5 border-none focus: outline-none bg-gray-600 text-gray-100 font-semibold w-full"
                    />
                    <button
                        type="submit"
                        className={`bg-gray-700 text-gray-100 font-semibold px-4 py-2 cursor-pointer hover:bg-gray-700/50 ml-2 rounded-2xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Buscando...' : 'Buscar'}
                    </button>
                </form>
            </div>
        </>
        
    );
};

export default PersonajesForm;