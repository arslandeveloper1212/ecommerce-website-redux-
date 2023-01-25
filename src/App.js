
import { Routes, Route } from "react-router-dom";
import Cards from './components/Cards'
import Header from "./components/Header";
import CardDetail from "./components/CardDetail";


function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path="/" element = {<Cards/>}/>
    <Route path="/cart/:id" element= {<CardDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
