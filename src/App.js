import {NavBar, Footer, Home, Services, About, Contact, Signup, Login, Error404} from "./Components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App(){
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}
export default App;