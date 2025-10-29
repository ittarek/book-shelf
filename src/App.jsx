import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
