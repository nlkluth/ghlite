import React from 'react';
import LoginContainer from '../login/LoginContainer';
import RepoListContainer from '../repos/RepoListContainer';

const CoreLayout = () => (
  <div>
    <LoginContainer />
    <RepoListContainer />
  </div>
);

export default CoreLayout;
