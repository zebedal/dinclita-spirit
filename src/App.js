import Layout from './components/layout/Layout';
import Homepage from './pages/Homepage';
import { Route } from 'react-router-dom'
import PetHotel from './pages/PetHotel';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/pethotel">
          <PetHotel />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
