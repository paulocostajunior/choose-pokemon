import { ThunkDispatch } from "redux-thunk";
import apiPokemon from "../api/apiPokemon";
import { AnyAction } from 'redux';

export const fetchPokemons = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
   const response = await apiPokemon.get('/pokemon');
   
   dispatch({type: 'FETCH_POKEMONS', payload: response.data })
}

export const fetchPokemon = ((id: number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
   const response = await apiPokemon.get(`/pokemon/${id}`);

   dispatch({type: 'FETCH_POKEMON', payload: response.data});
})