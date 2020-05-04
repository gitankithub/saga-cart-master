/**
 *
 * ManageCart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectManageCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import makeSelectMainContainer from '../MainContainer/selectors';
import { getUserInfoAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ManageCart extends React.Component {
  constructor(props) {
    super(props);
    const { getUserInfo } = props;
    getUserInfo('U20000');
  }

  render() {
    console.log(this.props.manageCart.users);
    return (
      <div>
        <Helmet>
          <title>ManageCart</title>
          <meta name="description" content="Description of ManageCart" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        {/* <div key={this.props.manageCart.users.id.toString()} className="person">
          <h2>My Name is {this.props.manageCart.users.name}</h2>
          <p>Country : {this.props.manageCart.users.country}</p>
          <p>Address : {this.props.manageCart.users.address1}</p>
          <p>Phone : {this.props.manageCart.users.phone}</p>
        </div> */}
        {this.props.manageCart.users &&
          this.props.manageCart.users.map(user => (
            <div key={user.id.toString()} className="person">
              <h2>My Name is {user.name}</h2>
              <p>Country : {user.country}</p>
              <p>Address : {user.address1}</p>
              <p>Phone : {user.phone}</p>
            </div>
          ))}
      </div>
    );
  }
}

ManageCart.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manageCart: makeSelectManageCart(),
  mainContainer: makeSelectMainContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: userId => dispatch(getUserInfoAction(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'manageCart', reducer });
const withSaga = injectSaga({ key: 'manageCart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageCart);
