
import {RESIVE_RESUME} from '../actions';

export default function resume(state = {}, action) {
  switch (action.type) {
    case RESIVE_RESUME:
      return action.resume;
    default:
      return state;
  }
}
