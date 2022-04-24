import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <Router>

      <Container customClass="min-heigth">
        <Routes>
          {
            <Route exact path='/' element={<HomePage />}></Route>
          /* 
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
          <Route path='/projects' element={<Projects />}></Route>

           */}
        </Routes>
      </Container>

    </Router>
  );
}

export default App;
