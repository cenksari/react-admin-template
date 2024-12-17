// interfaces
interface IProps {
  color: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<IProps> = ({ color, children }) => (
  <div className={`dropdown no-select ${color}`}>{children}</div>
);

export default Dropdown;
