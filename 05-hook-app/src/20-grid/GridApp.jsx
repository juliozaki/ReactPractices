import { Table } from './Table';
import { gridEvents } from './gridEvents';
import './style.css';


export const GridApp = () => {

    const { tableGrid, onAllData } = gridEvents();

    console.log('estúpida GridApp');


    return (
        <>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-sm'>
                    </div>

                    <h4>Tabla con registros del COVID</h4>
                    <Table
                        tableGrid={tableGrid}
                    />

                </div>

                <div className='col-sm'>
                    <button
                        onClick={onAllData}
                    >
                        Todo
                    </button>
                    <button>Primer</button>
                    <button>Último</button>
                </div>
            </div>
        </>
    )
}
