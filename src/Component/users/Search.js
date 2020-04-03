import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/github/githubContext';
import AlertContext from '../../Context/alert/alerContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const { setAlert } = alertContext;
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter some text', 'light');
    } else {
      githubContext.searchUsers(text);
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

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
