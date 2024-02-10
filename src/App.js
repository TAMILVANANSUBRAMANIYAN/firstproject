import Navbar from "./Components/Navbar/Navbar";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import Kids from "./Components/Kids/Kids";
import Home from "./Components/Home/Home";
import { BrowserRouter as router,Routes,Route, BrowserRouter} from "react-router-dom";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Women" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
       </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

