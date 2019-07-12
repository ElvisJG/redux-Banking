// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT';

export function makeDeposit(amount, account, description) {
  return {
    type: MAKE_DEPOSIT,
    payload: {
      amount,
      account,
      description
    }
  };
}
