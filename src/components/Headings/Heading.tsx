// interfaces
interface IProps {
  text: string;
  children?: React.ReactNode;
}

const Heading: React.FC<IProps> = ({ text, children }) => (
  <div className='flex flex-space-between heading'>
    <h1>{text}</h1>
    {children && <div className='input-group'>{children}</div>}
  </div>
);

export default Heading;
