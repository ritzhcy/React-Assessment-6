import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Students from './Component/Students';
import Navbar from './Component/Navbar';
import Edit from './Component/Edit'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/student-desc' element={<Edit />} />
        <Route path='/student-desc/:id' element={<Edit />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;