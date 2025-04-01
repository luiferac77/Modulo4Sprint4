import React from "react";
import { Trash, XCircle} from '@phosphor-icons/react';

import { useFavoritosContext } from "../context/FavoritosContext";

export const PopPersonajes = ({cerrarPop}) => {
    
    const {favoritos, eliminarItemDeFavoritos, eliminarFavoritos} = useFavoritosContext();

    
    return(

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10 transition-opacity duration-500 ease-in-out">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px] transition-transform duration-500 ease-in-out transform scale-100">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Favoritos</h2>
        
                            {favoritos.length === 0 ? (
                                <p className="text-gray-500">Favoritos está vacío.</p>
                            ) : (
                                <div className="space-y-4">
                                    {favoritos.map((item) => (
                                        <div key={item.id} className="flex items-center border p-3 rounded-lg shadow-sm">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div className="ml-4 flex-1">
                                                <p className="font-bold text-gray-700">{item.name}</p>
                                                <p className="text-gray-600"><strong>Especie:</strong> {item.species}</p>
                                                <p className="text-gray-600"><strong>Estado:</strong> {item.status}</p>
                                                <p className="text-gray-600"><strong>Género:</strong> {item.gender}</p>
                                            </div>
                                            <button 
                                                className=' text-red-500 px-3 py-1 text-sm cursor-pointer'
                                                onClick={() => eliminarItemDeFavoritos(item.id)}
                                                
                                            >
                                                <Trash size={32} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* BOTONES */}
                            <div className="flex justify-end mt-4 space-x-2">
                                <button 
                                    className="absolute top-2 right-2 rounded-full w-10 h-10"
                                    onClick={cerrarPop}
                                >
                                    <XCircle size={32} className="text-gray-700 font-bold cursor-pointer" />
                                </button>
                                {
                                favoritos.length !== 0 && (
                                    <button 
                                        className="bg-red-800 px-6 py-2 rounded-md cursor-pointer"
                                        onClick={() => {eliminarFavoritos()}}
                                    >Vaciar favoritos
                                    </button>
                                )}
                            </div>
                        </div>
                </div>

    );
}