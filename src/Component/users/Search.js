import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('please enter some text', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: ' ' });
    }
  };

  render() {
    const { clearData, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            placeholder='Search User......'
          />

          <input
            type='Submit'
            className='btn btn-dark btn-block'
            text='submit'
          />
        </form>

        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearData}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
