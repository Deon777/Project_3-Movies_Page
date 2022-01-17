import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Form from './Pages/Form';
import Listing from './Pages/Listing';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/returnPage::page" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId/:previousPage" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
