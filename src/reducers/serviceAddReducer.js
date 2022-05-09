import { 
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FIELD,
  EDIT_SERVICE,
} from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, { type, payload }) {
  switch(type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = payload;
      return {...state, [name]: value};
    
    case CLEAR_SERVICE_FIELD:
      return {...initialState};

    case EDIT_SERVICE:
      return {...state, name: payload.name, price: payload.price};
    
    default:
      return state;
  }
}