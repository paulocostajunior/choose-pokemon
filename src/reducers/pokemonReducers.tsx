import { RootStateOrAny } from "react-redux";
import _ from 'lodash';

export default (state = {}, action: RootStateOrAny) => {
  switch(action.type) {
    case 'FETCH_POKEMONS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_POKEMON':
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}