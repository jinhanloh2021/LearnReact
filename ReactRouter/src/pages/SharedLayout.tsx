import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavBar from '../components/StyledNavBar';

const Home = () => {
  return (
    <>
      <StyledNavBar />
      <Outlet />
    </>
  );
};
export default Home;
