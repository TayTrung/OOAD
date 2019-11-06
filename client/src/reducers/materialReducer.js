import {
  GET_MATERIALS,
  ADD_MATERIAL,
  DELETE_MATERIAL,
  MATERIALS_LOADING
} from "../actions/types";

const initialState = {
  materials: [],

  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MATERIALS:
      return {
        ...state,
        materials: action.payload,
        loading: false
      };
    case DELETE_MATERIAL:
      return {
        ...state,
        materials: state.materials.filter(
          material => material._id !== action.payload._id
        )
      };

    case ADD_MATERIAL:
      return {
        ...state,
        materials: [action.payload, ...state.materials]
      };
    case MATERIALS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
