import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Orders from "./pages/Orders"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/orders" element={<Orders/>}/>
        </Route>
    </Routes>
  )
}

export default App
