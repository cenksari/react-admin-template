// interfaces
interface IProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const Table = ({ header, children }: IProps): JSX.Element => (
  <div className='table-containment scroller-horizontal scroller-vertical'>
    <table className='table'>
      <thead>{header}</thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Table;
