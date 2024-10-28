import React from "react";
import Home from "./Component/Home";
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Search from "./Component/Search"
import Watch from "./Component/Watch";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Watch:id' element={<Watch/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
