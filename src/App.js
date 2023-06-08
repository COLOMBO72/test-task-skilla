import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main_wrapper'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
