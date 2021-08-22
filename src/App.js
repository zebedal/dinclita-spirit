import Layout from './components/layout/Layout';
import Homepage from './pages/Homepage';
import { Route } from 'react-router-dom'
import PetHotel from './pages/PetHotel';
import About from './pages/About'
import ScrollToTop from './components/custom/scrollToTop'
import Cane from './pages/Cane';
import BullDog from './pages/Bulldog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Layout>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pethotel">
          <PetHotel />
        </Route>
        <Route path="/canecorso">
          <Cane />
        </Route>
        <Route path="/bulldog">
          <BullDog />
        </Route>
        <Route path="/contactos">
          <Contact />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
