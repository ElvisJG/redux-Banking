import React from 'react';
import { connect } from 'react-redux';
import Balances from './Balances';
import Deposit from './Deposit';
import Withdrawal from './Withdrawal';
import { getAccount } from '../actions';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getAccount();
  }

  logout = evt => {
    evt.preventDefault();

    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <button type='button' onClick={this.logout}>
          Logout
        </button>
        <Balances />
        <Deposit />
        <Withdrawal />
      </>
    );
  }
}

const mapDispatchToProps = {
  getAccount
};

// first param is mapStateToProps
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
