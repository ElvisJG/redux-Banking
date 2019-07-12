import { MAKE_DEPOSIT } from './actions';

const initialState = {
  checking: 20000,
  savings: 50000
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_DEPOSIT:
      const { amount, account } = action.payload;
      const newAmount = parseInt(amount) + state[account];
      return {
        ...state,
        [account]: newAmount
      };
    default:
      return state;
  }
}
