//utilizamos la librería react-table :::  https://tanstack.com/table/v8/docs/installation
import { useTable, usePagination } from 'react-table';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TablePagination } from './TablePagination';

export const Table = ({ tableGrid = [] }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns: tableGrid.columns,
            data: tableGrid.data,
            initialState: {
                pageSize: 5,
                pageIndex: 0
            }
        },
        usePagination
    );

    console.log('Estoy en Table');

    return (
        <div className='col-sm'>
            <table className='table table-striped table-bordered' {...getTableProps()}>

                <TableHead
                    headerGroups={headerGroups}
                />

                <TableBody
                    getTableBodyProps={getTableBodyProps}
                    page={page}
                    prepareRow={prepareRow}
                />

            </table>

            <div  >
                <TablePagination
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageOptions={pageOptions}
                    pageCount={pageCount}
                    gotoPage={gotoPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    setPageSize={setPageSize}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                />
            </div>

        </div>
    )

}
