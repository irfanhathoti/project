import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import { DataProvide } from './Components/DataContext';
import Home from './Components/Home';
import CategoryPage from './Components/CategoryPage';
import Info from './Components/Info';


function App() {
  return (
    <DataProvide>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path='/category' element={<CategoryPage />} >
              <Route path=':ctname/' element={<CategoryPage />}>
              </Route>
            </Route>
            <Route path='news/:category' element={<Info />} >
              <Route path=':id' element={<Info />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </DataProvide>

  );
}

export default App;
