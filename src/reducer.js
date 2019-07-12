import { MAKE_DEPOSIT } from './actions';

// All state values need an initial value
const initialState = {
  checking: 0,
  savings: 0,
  accountActivity: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_DEPOSIT:
      const { amount, account, description } = action.payload;
      const newAmount = parseInt(amount) + state[account];
      // const newActivity = state.accountActivity.concat([description]);
      const newActivity = state.accountActivity.concat([
        `${new Date()} - ${description} - ${amount}`
      ]);

      return {
        ...state,
        [account]: newAmount,
        accountActivity: newActivity
      };
    default:
      return state;
  }
}
