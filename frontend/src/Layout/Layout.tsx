
import Routes from '../Routes/Routers';
import Header from '../components/header/Header';


const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routes/>
    </main>
    </>
  );
};

export default Layout;