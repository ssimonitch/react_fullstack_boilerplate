import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    console.log('FEATURE PROPS', this.props);
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

Feature.propTypes = {
  fetchMessage: PropTypes.func,
  message: PropTypes.string
};

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
