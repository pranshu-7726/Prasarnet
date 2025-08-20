import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRoutes from './appRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
