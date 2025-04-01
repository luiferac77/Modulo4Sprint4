import { createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export const useFavoritosContext = () => {
    return useContext(FavoritosContext);
}

export const FavoritosProvider = ({children}) => {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const storedFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritos(storedFavoritos);
    
    }, []);
    

    const agregarAFavoritos = (personaje) => {
        setFavoritos(
            (favoritoEnStorage) => {

                const existeFavoritoEnStorage = favoritoEnStorage.find( f=>f.id === personaje.id );
                if(!existeFavoritoEnStorage){
                    const favoritosActualizado = [...favoritoEnStorage, personaje];
                    localStorage.setItem('favoritos', JSON.stringify(favoritosActualizado));
                    return favoritosActualizado;
                } else {
                    alert(`El personaje ya est{a agregado a favoritos`);
                    return favoritoEnStorage;
                }
            }
        );
    }

    const eliminarFavoritos = () => {
        setFavoritos(localStorage.clear('favotiros') || []);
    }

    const eliminarItemDeFavoritos = (id) => {
        setFavoritos(
            (favoritoEnStorage) => {
                const favoritoActualizado = favoritoEnStorage.filter(f => f.id !== id);
                localStorage.setItem('favoritos', JSON.stringify(favoritoActualizado));
                return favoritoActualizado;
            }
        );
    }

    return(
        <FavoritosContext.Provider value={{favoritos, agregarAFavoritos, eliminarItemDeFavoritos, eliminarFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    );
}


