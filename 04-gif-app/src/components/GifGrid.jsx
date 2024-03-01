
//import React from 'react'
//import { getGifs } from '../helpers/getGifs';
//import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {

    const { images, isLoading } = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {
                ///utilizar validación ternaria de TRUE
                isLoading && (<h2>cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        //<li key={image.id}>{image.title}  {image.url}</li>
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}