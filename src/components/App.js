import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import Layout from '../Layouts/Layout';
import Main from '../Layouts/Main';
import logo from '../logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
