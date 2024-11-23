// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Master = ({ children }: IProps): JSX.Element => (
  <div className='site-frame'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Master;
