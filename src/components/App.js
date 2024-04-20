import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import Layout from '../Layouts/Layout';
import Main from '../Layouts/Main';
import logo from '../logo.svg';
import './App.css';
import Logo from './Header/Logo';
function App() {
  return (
    <div className="App">
      <Logo />
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
