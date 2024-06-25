import React from 'react';

interface IProps {
  totalPages: number;
  currentPage: number;
}

const PagesSelect = ({ totalPages, currentPage }: IProps): any => {
  const pageArray: React.JSX.Element[] = [];

  for (let i = 1; i <= totalPages; i += 1) {
    if (i === currentPage) {
      pageArray.push(
        <option key={i} value={i} disabled>
          {i}
        </option>
      );
    } else {
      pageArray.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
  }

  return pageArray;
};

export default PagesSelect;
