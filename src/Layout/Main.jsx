import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar/Navbar';
import Footer from '../pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;