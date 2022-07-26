import {NavBar, Footer, Home, Services, About, Contact, Signup, Login, Error404} from "./Components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
let home = "https://manish202.github.io/manishpay";
function App(){
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={home+"/"} element={<Home />} />
      <Route path={home+"/services"} element={<Services />} />
      <Route path={home+"/about"} element={<About />} />
      <Route path={home+"/contact"} element={<Contact />} />
      <Route path={home+"/signup"} element={<Signup />} />
      <Route path={home+"/login"} element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}
export default App;