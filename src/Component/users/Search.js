import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setAlert, searchUsers, clearData, showClear }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter some text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          placeholder='Search User......'
        />

        <input type='Submit' className='btn btn-dark btn-block' text='submit' />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearData}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
