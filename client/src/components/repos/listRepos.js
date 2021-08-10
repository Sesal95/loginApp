import React, { useContext } from 'react';
import ListContext from '../../contexts/listContext';
import FavRepos from './favorites';
import GitHubRepos from './gtRepos';

const ListRepos = () => {
  const { isGH } = useContext(ListContext);
  return (
    <div>
       {isGH ? <GitHubRepos/> : <FavRepos/>}
    </div>
  );
}

export default ListRepos
