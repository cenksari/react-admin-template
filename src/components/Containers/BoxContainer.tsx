// interfaces
interface IProps {
  boxes: number;
  children: React.ReactNode;
}

const BoxContainer = ({ boxes, children }: IProps): JSX.Element => (
  <div className={`box-container box-container-${boxes}`}>{children}</div>
);

export default BoxContainer;
