import React from 'react';

// components
import Pages from './Pages';
import PagesSelect from './PagesSelect';

// interfaces
interface IProps {
  url: string;
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Paging = ({ url, pageSize, totalRows, currentPage }: IProps): React.JSX.Element | null => {
  const totalPages = Math.floor((totalRows + pageSize - 1) / pageSize);

  if (totalPages < 1) {
    return null;
  }

  if (currentPage > totalPages) {
    return null;
  }

  /**
   * Calculates the previous page number based on the current page.
   * If the current page is greater than 1, it decrements the current page by 1.
   * If the current page is 1 or less, it sets the previous page to 1.
   *
   * @returns The previous page number.
   */
  const prevPage = (): number => {
    let prev = currentPage;

    if (prev > 1) {
      prev = currentPage - 1;
    } else {
      prev = 1;
    }

    return prev;
  };

  /**
   * Calculates the next page number based on the current page and total pages.
   * If the current page is less than the total pages, it increments the current page by 1.
   * If the current page is equal to or greater than the total pages, it sets the next page to the total pages.
   *
   * @returns The next page number.
   */
  const nextPage = () => {
    let next = currentPage;

    if (next < totalPages) {
      next = currentPage + 1;
    } else {
      next = totalPages;
    }

    return next;
  };

  /**
   * Handles the change event of the page select element.
   * Redirects to the new page based on the selected value.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   */
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

  return null;
};

export default Paging;
