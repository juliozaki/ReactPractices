//import React from 'react'

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {

    const [categorias, setcategorias] = useState(['One Piece', 'Dragon Ball']);

    const onAddCategory = () => {
        ////los 3 puntos sirven para copiar el arreglo completo
        setcategorias(['El chavo', ...categorias]);
    }

    return (
        <>
            <h1>Gif App</h1>
            {/*Agrega una categoria */}
            <AddCategory></AddCategory>

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {
                    categorias.map(categoria => {
                        return <li key={categoria}> {categoria} </li>
                    })
                }
            </ol>
        </>
    )
}
