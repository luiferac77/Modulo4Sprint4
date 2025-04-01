import React, { useState } from 'react';
import { Heart } from '@phosphor-icons/react';
import { useFavoritosContext } from '../context/FavoritosContext';
import { PopPersonajes } from './PopPersonajes';

const Header = () => {

    const {favoritos} = useFavoritosContext();

    const totalFavoritos = favoritos.length;
    const [pop, setPop] = useState(false);

    return (
        
        <header className='flex items-center justify-center w-full p-6 bg-gray-900 text-white'>
            <div className='flex container mx-auto justify-between items-center'>
                <h1 className='flex text-xl font-bold items-center'>
                <span className='text-yellow-400'>&nbsp;Rick And Morthy</span>
                </h1>
                <div className='flex items-center space-x-4'>
                    {/* Botón para el carrito */}
                    <button 
                        id='verFavoritos' 
                        className='relative cursor-pointer'
                        onClick={() => setPop(true)}
                    >
                    <Heart size={32} className='text-gray-300' weight="fill" />
                    {
                        totalFavoritos > 0 && (
                            <span className='absolute -top-2 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                                {totalFavoritos}
                            </span>
                        )
                    
                    }
                    </button>
                    {/* Fin del botón para el carrito */}
                </div>
            </div>

            {/*{showModal && <CartModal closeModal={() => setShowModal(false)} />}*/}
            {
                pop && <PopPersonajes cerrarPop={() => setPop(false)} /> 
            }

        </header>
    )
}

export default Header