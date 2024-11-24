import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Tripcatalouge from './routes/Tripcatalouge';
import Contact from './routes/Contact';
import Tourreview from './routes/Tourreview';

export default function App(){
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tripcatalouge' element={<Tripcatalouge/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tourreview' element={<Tourreview/>}/>
      </Routes>

    </div>
  )
};
