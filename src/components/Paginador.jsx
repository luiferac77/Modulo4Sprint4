import React from 'react';

const Paginador = ({currentPage, totalItems, itemsPerPage, nextPage, prevPage}) => {
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <>
            <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className='mt-4 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition text-white'
            >
                Anterior
            </button>
            <button
                onClick={nextPage}
                disabled={currentPage >= totalPages - 1}
                className='mt-4 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 text-white transition'
            >
                Siguiente
            </button>
        </>
    )
}

export default Paginador;