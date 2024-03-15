


export const TableHead = ({ headerGroups = [] }) => {

    console.log('Estoy en THead');

    return (
        <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {
                                        column.render("Header")
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
    )
}
