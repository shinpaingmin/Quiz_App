import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { CircularProgress } from '@mui/material';

const Home = lazy(()=>import('./pages/Home'));
const Quiz = lazy(()=>import('./pages/Quiz'));
const Result = lazy(()=>import('./pages/Result'));
const NotFound = lazy(()=>import('./pages/NotFound'));


function App() {
  return (
    <div>
      <Router>
        <div className="app">
            <Header/>
            <Suspense fallback={<CircularProgress style={{margin : 100, textAlign: "center", marginTop: 150}} color="inherit" size={150} thickness={1}/>}>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/quiz/:category/:difficulty' element={<Quiz/>}></Route>
                <Route path='/result' element={<Result/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
              </Routes>  
            </Suspense> 
        </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
