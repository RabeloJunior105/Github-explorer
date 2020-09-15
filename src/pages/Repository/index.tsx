import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Repository: React.FC = () => {
  const { params } = useRouteMatch();
  console.log(params.repository);
  return <h1>Repository</h1>;
};

export default Repository;
