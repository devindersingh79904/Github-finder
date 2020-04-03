import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../Context/github/githubContext';

const User = ({ match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepo, repos } = githubContext;
  const {
    login,
    name,
    location,
    avatar_url,
    bio,
    html_url,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          back to search
        </Link>

        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt='ff'
              style={{ width: '150px' }}
            ></img>
            <h1>{name}</h1>
            <p>{location}</p>
          </div>

          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              go to Github page
            </a>

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>UserName : </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>company : </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog : </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className='card text-center'>
          <div className='badge badge-primary'> Followers : {followers}</div>
          <div className='badge badge-success'> Following : {following}</div>
          <div className='badge badge-light'>Public_Repos : {public_repos}</div>
          <div className='badge badge-dark'> Public_Gists : {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
