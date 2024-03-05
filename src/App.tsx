import Board from './components/Board';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

function App() {
  return <main>
    <section>
      <TopBar />
      <Board />
      <Footer />
    </section>
  </main>
}

export default App
