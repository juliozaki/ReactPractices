


export const TableBody = ({ getTableBodyProps = [], page, prepareRow }) => {

    console.log('Estoy en Tbody');

    return (
        <tbody {...getTableBodyProps()}>
            {
                page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {
                                                cell.render("Cell")
                                            }
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
        </tbody>
    )
}
