import './App.css';
import Main from './main/Main';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import Footer from './component/Footer';
import Contact from './Contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
<Route path='/' element={<Main/>} />
<Route path='/kontakt' element={<Contact/>} />


      </Routes>
<Footer/>

    </div>
</BrowserRouter>
  );
}

export default App;
