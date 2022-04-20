import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import People from './pages/People'
import Films from './pages/Films'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>LOL</h1>

      <Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
          <Route path="/people" element={<People />} />
          <Route path="/films" element={<Films />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
    </div>
  );
}

export default App;
