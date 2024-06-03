import './App.css';
import Navbar from './components/NavBar';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <section>
          <Intro></Intro>
        </section>
    </div>
  );
}

export default App;
