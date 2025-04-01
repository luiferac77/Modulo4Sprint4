import React, { useContext, useEffect } from "react";
import { PersonajeContext } from "../context/PersonajeContext";

export const useBuscarPersonajes = (nombre) => {
    const { buscarPersonajes } = useContext(PersonajeContext);

    useEffect(() => {
        if (nombre) {
            buscarPersonajes(nombre); // Llama a buscarPersonajes con el nombre
        }
    }, [nombre, buscarPersonajes]); // Observa el nombre y la función
}