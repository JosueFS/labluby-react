/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';

import { GenericHeader } from './styles';

interface IHeaderProps {
  counter: number;
  pageName: string;
}

const GHeader: React.FC<IHeaderProps> = ({ counter, pageName }) => {
  return (
    <GenericHeader>
      <Link to="user">
        <RiArrowLeftLine size={24} />
      </Link>
      <strong> {`${counter} ${pageName}`} </strong>
    </GenericHeader>
  );
};

export default GHeader;
