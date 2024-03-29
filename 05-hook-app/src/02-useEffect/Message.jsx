import { useEffect, useState } from "react"



export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({
                x: x,
                y: y
            });
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    },
        []
    );

    return (
        <>
            <h3>El usuario ya existe</h3>
        </>
    )
}
