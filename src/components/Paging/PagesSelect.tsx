// interfaces
interface IProps {
  totalPages: number;
  currentPage: number;
}

const PagesSelect: React.FC<IProps> = ({ totalPages, currentPage }) => {
  const pageArray = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageArray.push(
      <option key={i} value={i} disabled={i === currentPage}>
        {i}
      </option>
    );
  }

  return pageArray;
};

export default PagesSelect;
