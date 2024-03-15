//import { BiFirstPage, BiLastPage } from "react-icons/bi";
//import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


export const TablePagination = ({
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize
}) => {

    return (
        <>
            <div>
                <span>
                    Page&nbsp;
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
            </div>

            <div >
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    z=
                </button>{" "}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    z
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    z
                </button>{" "}
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    =z
                </button>{" "}
            </div>

            <div >
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 15].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize !== 15 ? `Show ${pageSize}` : `Show all`}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )

}
