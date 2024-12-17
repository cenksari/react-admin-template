// interfaces
interface IProps {
  totalPages: number;
  currentPage: number;
}

const PagesSelect: React.FC<IProps> = ({ totalPages, currentPage }) => {
  const pageArray = [];

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
