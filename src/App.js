import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="category/:name" element={<Category/>}/>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
