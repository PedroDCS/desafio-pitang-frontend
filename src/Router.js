import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "./components/Container/Container";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Scheduling from "./pages/Scheduling/Scheduling";
import SchedulingTable from "./pages/SchedulingTable/SchedulingTable";



function Router() {
    return (<BrowserRouter>
        <Link to='/' >Home</Link>
        <Link to='/login' >login</Link>
        <Link to='/registro' >registro</Link>
        <Link to='/marcarconsulta' >marcarconsulta</Link>
        <Link to='/consultas' >consultas</Link>
        <Container customClass="min-heigth">
            <Routes>

                <Route exact path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Register />} />
                <Route path='/marcarconsulta' element={<Scheduling />} />
                <Route path='/consultas' element={<SchedulingTable />} />
                <Route path='*' element={<h1>Pagina não existe...</h1>} />

            </Routes>
        </Container>

    </BrowserRouter>);
}

export default Router;