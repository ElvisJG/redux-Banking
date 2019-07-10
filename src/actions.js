// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT';

export function makeDeposit(amount, account) {
  return {
    type: MAKE_DEPOSIT,
    payload: {
      amount,
      account
    }
  };
}
