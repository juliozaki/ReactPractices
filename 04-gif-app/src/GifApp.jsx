//import React from 'react'

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categorias, setcategorias] = useState(['One Piece']);

    const onAddCategory = (newCategory) => {

        if (categorias.includes(newCategory)) return;
        ////los 3 puntos sirven para copiar el arreglo completo
        setcategorias([newCategory, ...categorias]);
    }

    return (
        <>
            <h1>Gif App</h1>
            {/*Agrega una categoria */}
            <AddCategory
                //setcategories={setcategorias}
                onNewCategoriy={onAddCategory}
            />

            {/*<button onClick={onAddCategory}>Agregar</button>*/}

            {/*<ol>*/}
            {
                /*categorias.map(categoria => {
                    return <li key={categoria}> {categoria} </li>
                })*/
                categorias.map((categoria) => (
                    <GifGrid
                        key={categoria}
                        categoria={categoria}
                    />
                ))
            }
            {/*</ol>*/}
        </>
    )
}
