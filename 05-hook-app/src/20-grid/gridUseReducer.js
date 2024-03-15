import useRows from './useRows';
import useHead from './useHead';

export const gridUseReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[All Data]':
            console.log('Estoy en el [All Data]');
            return (
                {
                    ...initialState,
                    data: useRows()
                }
            );

        /*case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });*/

        default:
            return initialState;
    }


}
