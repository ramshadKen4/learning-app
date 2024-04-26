import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import Layout from '../Layouts/Layout';
import Main from '../Layouts/Main';
import logo from '../logo.svg';
import './App.css';
import Address from './Footer/Address';
import Logo from './Header/Logo';
import StickyButtons from './utility/StickyButtons';
function App() {
  return (
    <div className="App">
      <Layout>
        <Logo />
        <Header />
        <Main />
        <Footer />
        <Address />
        <StickyButtons />
      </Layout>
    </div>
  );
}

export default App;
