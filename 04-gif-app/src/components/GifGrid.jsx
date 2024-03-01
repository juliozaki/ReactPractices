
//import React from 'react'

export const GifGrid = ({ categoria }) => {

    const getGifs = () => {

        const url = `api.giphy.com/v1/gifs/trending?api_key=H1cRMQ7pnjZ4Evea7VldAQoHGbo2lB7W&q=${categoria}&limit=10`
    }

    return (
        <>
            <h3>{categoria}</h3>
            <p>Hola Mundo</p>
        </>
    )
}
