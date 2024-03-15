import { useMemo } from 'react';

export default function useHead() {
    const columns = /*useMemo(
        () => */[
            {
                Header: "Fecha",
                accessor: "date"
            },
            {
                Header: "Positivos",
                accessor: "positive"
            },
            {
                Header: "Negativos",
                accessor: "negative"
            },
            {
                Header: "Pendientes",
                accessor: "pending"
            },
            {
                Header: "Muertes",
                accessor: "death"
            },
            {
                Header: "Hospitalizados",
                accessor: "hospitalizedCumulative"
            },
            {
                Header: "Test totales",
                accessor: "totalTestResults"
            },
            {
                Header: "Id",
                accessor: "hash"
            }
        ]//,
    //[]
    //);

    return columns;
}