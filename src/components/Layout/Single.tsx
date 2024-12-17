// interfaces
interface IProps {
  children: React.ReactNode;
}

const Single: React.FC<IProps> = ({ children }) => (
  <div className='single-frame flex flex-v-center'>
    <div className='site-frame max-width'>{children}</div>
  </div>
);

export default Single;
