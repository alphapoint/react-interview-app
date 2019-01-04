import * as axios from 'axios'

export const simpleAction = () => dispatch => {
    axios.get('https://swapi.co/api/films/').then(({ data }) =>
        dispatch({
            type: 'SIMPLE_ACTION',
            payload: data.results
        })
    )
}
