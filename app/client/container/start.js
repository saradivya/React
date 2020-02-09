import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import increment from '../actions/increment';
import PropTypes from 'prop-types';
class StartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TextField label="count" value={this.props.count} />
        <Button onClick={() => this.props.increment(this.props.count)}>Increment</Button>
      </div>
    );
  }
}

StartContainer.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
};
export const mapStateToProps = state => ({
  count: state.fetchCountReducer.count,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(StartContainer);
