import React  from 'react';
import { usePersonajeContext } from '../context/PersonajeContext';
import { useFavoritosContext } from '../context/FavoritosContext';
import { Heart } from "@phosphor-icons/react";

const PersonajesCard = () => {
    const { personajes, loading, error} = usePersonajeContext();
    const {agregarAFavoritos} = useFavoritosContext();

    if (loading) return <div className='text-gray-300'>Cargando...</div>;
    if (error) return <div className='text-gray-300'>{error}</div>;
    if (!personajes || personajes.length === 0) return <div className='flex container text-gray-300'>No se encontraron personajes</div>;

    return (
        <div className="overflow-auto container mx-auto bg-gray-800" style={{ height: '600px', maxHeight: '600px' }}> {/* Contenedor con scroll */}
            <div className="grid grid-cols-1 gap-4 mt-4 transition duration-1000">
                {personajes.map((personaje) => (
                    <div className='relative p-4 ' key={personaje.id}>
                        <div className="flex border p-4 rounded-md shadow-md items-center">
                        <img 
                            src={personaje.image} 
                            alt={personaje.name} 
                            className="w-24 h-24 rounded mr-4" 
                        />
                        <div>
                            <h2 className="text-xl font-bold">{personaje.name}</h2>
                            <p><strong>Especie:</strong> {personaje.species}</p>
                            <p><strong>Estado:</strong> {personaje.status}</p>
                            <p><strong>Género:</strong> {personaje.gender}</p>
                        </div>
                        <button 
                            onClick={() => agregarAFavoritos(personaje)}
                            className='absolute w-10 h-10 rounded-full bottom-6 right-6 flex items-center justify-center p-2 cursor-pointer transition shadow-lg text-white bg-gray-400 hover:text-red-600'
                        >
                        <Heart size={32} weight="fill" />
                        </button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default PersonajesCard;