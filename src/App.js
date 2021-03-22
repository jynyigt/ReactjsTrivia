import logo from './logo.svg';
import './App.css';
import Start from "./components/Start";
import { BrowserRouter, Route, Link } from "react-router-dom";
import QuestionCard from './components/QuestionCard';

const App=()=> {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Start}/>
    
    </BrowserRouter>
  );
}

export default App;
