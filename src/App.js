
import Home from "./components/Home"
import Header from "./components/Home/Header/Header"
import Products from "./components/Products/Products"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from "./components/Contact/Contact"


function App() {


  return (
   <>
    <Router>
      <Header/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/products' element={<Products/>} />
         <Route path='/Contact' element={<Contact/>} />
       </Routes>
    </Router>
   </>
   
  )
}

export default App
