import React, { useState }  from 'react';
import { usePersonajeContext } from '../context/PersonajeContext';
import { useFavoritosContext } from '../context/FavoritosContext';
import { Heart } from "@phosphor-icons/react";
import Paginador from './Paginador';

const PersonajesCard = () => {
    const { personajes, loading, error} = usePersonajeContext();
    const {agregarAFavoritos} = useFavoritosContext();

    const [currentPage, setCurrentPage] = useState(0); /* estado de la página actual */
    const cardsPerPage = 5; //cantidad de cards por página

    if (loading) return <div className='text-gray-300'>Cargando...</div>;
    if (error) return <div className='text-gray-300'>{error}</div>;
    if (!personajes || personajes.length === 0) return <div className='flex container text-gray-300'>No se encontraron personajes</div>;

    const indexOfLastCard = (currentPage + 1) * cardsPerPage; //calculo el último indice de cards
    const indexOfFirstCard = indexOfLastCard - cardsPerPage; //calculo el indice inicial de cardss
    const currentPersonajes = personajes.slice(indexOfFirstCard, indexOfLastCard);//con slice covierto un array a partir de otro array con los paramétros indice inicial e indice final

    const nextPage = () => {
        /*if(indexOfLastCard < personajes.length){
            setCurrentPage(currentPage + 1);
        }*/
        setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        /*if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }*/
        setCurrentPage(currentPage - 1);
    }

    return (
        <div className="overflow-auto container mx-auto bg-gray-800/80" style={{ height: '600px', maxHeight: '600px' }}> {/* Contenedor con scroll */}
            <div className="grid grid-cols-1 gap-4 mt-4 transition duration-1000">
                {currentPersonajes.map((personaje) => (
                    <div className='relative p-4' key={personaje.id}>
                        <div className="flex border p-4 rounded-md shadow-md items-center bg-gray-700/80 text-gray-300">
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
                            className='absolute w-10 h-10 rounded-full bottom-8 right-8 flex items-center justify-center p-2 cursor-pointer transition shadow-lg text-white bg-gray-400 hover:text-red-600'
                        >
                        <Heart size={32} weight="fill" />
                        </button>
                        </div>
                    </div>
                    
                ))}
            </div>
            {/* Botones del paginador */}
            <div className='flex justify-between mt-4 mx-auto w-sm p-8'>
                <Paginador 
                    currentPage={ currentPage}
                    totalItems={personajes.length}
                    itemsPerPage={cardsPerPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>

            {/* Fin de botones del paginador */}
            
        </div>
    );
}

export default PersonajesCard;