import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// components
import Pages from './Pages';
import PagesSelect from './PagesSelect';

// interfaces
interface IProps {
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Paging: React.FC<IProps> = ({ pageSize, totalRows, currentPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const totalPages = Math.ceil(totalRows / pageSize);

  if (totalPages <= 1 || currentPage > totalPages) return null;

  /**
   * Navigates to a specific page number.
   *
   * @param {number} pn - The page number to navigate to.
   */
  const buildUrl = (pn: number): string => {
    const queryParams = new URLSearchParams(searchParams);

    queryParams.set('page', pn.toString());

    return `${location.pathname}?${queryParams.toString()}`;
  };

  /**
   * Handles the change event for the page select element.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   */
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void | Promise<void> =>
    navigate(buildUrl(Number(e.target.value)));

  const renderNavButton = (page: number, label: string, title: string, disabled: boolean) => (
    <li className={disabled ? 'disabled' : ''}>
      {disabled ? (
        <span className='material-symbols-outlined'>{label}</span>
      ) : (
        <Link to={buildUrl(page)} title={title}>
          <span className='material-symbols-outlined'>{label}</span>
        </Link>
      )}
    </li>
  );

  return (
    <div className='paging flex flex-v-center flex-h-center no-select'>
      <ul className='flex flex-v-center flex-h-center'>
        {renderNavButton(1, 'skip_previous', 'First page', currentPage === 1)}
        {renderNavButton(currentPage - 1, 'navigate_before', 'Previous page', currentPage === 1)}

        {totalPages > 8 ? (
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
        ) : (
          <Pages urlBuilder={buildUrl} totalPages={totalPages} currentPage={currentPage} />
        )}

        {renderNavButton(currentPage + 1, 'navigate_next', 'Next page', currentPage >= totalPages)}
        {renderNavButton(totalPages, 'skip_next', 'Last page', currentPage >= totalPages)}
      </ul>
    </div>
  );
};

export default Paging;
