// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Master: React.FC<IProps> = ({ children }) => (
  <div className='site-frame'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Master;
