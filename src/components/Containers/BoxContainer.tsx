// interfaces
interface IProps {
  boxes: number;
  children: React.ReactNode;
}

const BoxContainer: React.FC<IProps> = ({ boxes, children }) => (
  <div className={`box-container box-container-${boxes}`}>{children}</div>
);

export default BoxContainer;
