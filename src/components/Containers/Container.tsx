// interfaces
interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => (
  <div className={className ? `container ${className}` : 'container'}>{children}</div>
);

export default Container;
