import React from 'react';

import Pages from './Pages';
import PagesSelect from './PagesSelect';

interface IProps {
  url: string;
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Paging = ({ url, pageSize, totalRows, currentPage }: IProps): React.JSX.Element => {
  const totalPages = Math.floor((totalRows + pageSize - 1) / pageSize);

  if (totalPages < 1) {
    return <div />;
  }

  if (currentPage > totalPages) {
    return <div />;
  }

  const prevPage = () => {
    let prev = currentPage;

    if (prev > 1) {
      prev = currentPage - 1;
    } else {
      prev = 1;
    }

    return prev;
  };

  const nextPage = () => {
    let next = currentPage;

    if (next < totalPages) {
      next = currentPage + 1;
    } else {
      next = totalPages;
    }

    return next;
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const curr = e.target.value;

    document.location = `${url}?page=${curr}`;
  };

  if (totalRows > 0 && totalRows > pageSize) {
    if (totalPages > 10) {
      return (
        <div className='paging flex flex-v-center flex-h-center no-select'>
          <ul className='flex flex-v-center flex-h-center'>
            {currentPage === 1 ? (
              <>
                <li className='disabled'>
                  <span className='material-symbols-outlined'>skip_previous</span>
                </li>
                <li className='disabled'>
                  <span className='material-symbols-outlined'>navigate_before</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`${url}?page=1`} title='First page'>
                    <span className='material-symbols-outlined'>skip_previous</span>
                  </a>
                </li>
                <li>
                  <a href={`${url}?page=${prevPage()}`} title='Previous page'>
                    <span className='material-symbols-outlined'>navigate_before</span>
                  </a>
                </li>
              </>
            )}

            <li className='select-container'>
              <select
                id='pages'
                name='pages'
                aria-label='pages'
                className='pointer'
                defaultValue={currentPage}
                onChange={handleSelectChange}
              >
                <PagesSelect totalPages={totalPages} currentPage={currentPage} />
              </select>
            </li>

            {currentPage >= totalPages ? (
              <>
                <li className='disabled'>
                  <span className='material-symbols-outlined'>navigate_next</span>
                </li>
                <li className='disabled'>
                  <span className='material-symbols-outlined'>skip_next</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`${url}?page=${nextPage()}`} title='Next page'>
                    <span className='material-symbols-outlined'>navigate_next</span>
                  </a>
                </li>
                <li>
                  <a href={`${url}?page=${totalPages}`} title='Last page'>
                    <span className='material-symbols-outlined'>skip_next</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      );
    }

    return (
      <div className='paging flex flex-v-center flex-h-center no-select'>
        <ul className='flex flex-v-center flex-h-center'>
          {currentPage === 1 ? (
            <>
              <li className='disabled'>
                <span className='material-symbols-outlined'>skip_previous</span>
              </li>
              <li className='disabled'>
                <span className='material-symbols-outlined'>navigate_before</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`${url}?page=1`} title='First page'>
                  <span className='material-symbols-outlined'>skip_previous</span>
                </a>
              </li>
              <li>
                <a href={`${url}?page=${prevPage()}`} title='Previous page'>
                  <span className='material-symbols-outlined'>navigate_before</span>
                </a>
              </li>
            </>
          )}

          <Pages url={url} totalPages={totalPages} currentPage={currentPage} />

          {currentPage >= totalPages ? (
            <>
              <li className='disabled'>
                <span className='material-symbols-outlined'>navigate_next</span>
              </li>
              <li className='disabled'>
                <span className='material-symbols-outlined'>skip_next</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`${url}?page=${nextPage()}`} title='Next page'>
                  <span className='material-symbols-outlined'>navigate_next</span>
                </a>
              </li>
              <li>
                <a href={`${url}?page=${totalPages}`} title='Last page'>
                  <span className='material-symbols-outlined'>skip_next</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  return <div />;
};

export default Paging;
