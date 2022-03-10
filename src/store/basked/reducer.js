import { ACTION_ADD, ACTION_DELETE} from "./actions";

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, { type, payload, title , prise,  weight}) {

    switch (type) {
        case ACTION_ADD:
            return [...state, { id: Date.now(), title: title, prise: prise, weight: weight }] ;
        case ACTION_DELETE:
            return  state.filter(el => el.id !== payload ? true : false) ;
        default:
            return state;
    }
}