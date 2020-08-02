import { RootStateOrAny } from "react-redux";

export default (state = [], action: RootStateOrAny) => {
    switch(action.type) {
        case 'FETCH_POKEMONS':
            return action.payload
        default:
            return state;
    }
}