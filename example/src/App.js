import { Route, Routes } from 'react-router-dom';
import './App.css';
import CropForm from './CropForm';
import axios from 'axios';
import Static from './Static'
import WhomWeServe from './WhomWeServe';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

function App() {
  return (
    <div className='app'>
    
      <Routes>
        <Route path='/' element={<Static/>}/>
        <Route  path='/Cropform' element={<CropForm/>}  />
        <Route path='/use' element={<WhomWeServe/>}/>
      </Routes>
    </div>
  );
}

export default App;