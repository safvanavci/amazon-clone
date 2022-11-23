import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="category/:name" element={<Category/>}/>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
