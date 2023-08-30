import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchJobs from './components/SearchJobs';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <SearchJobs />
      <Divider />
    </div>
  );
}

export default App;
