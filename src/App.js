import React, { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./component/Navbar";
import { Contact } from "./pages/Contact";
import {Routes , Route} from "react-router-dom" ; 
import { NotFound } from "./pages/notfound";
import { UsersPage } from "./pages/users";
function App(){
  
  return(
    <>
    <Navbar />
      
     
      

      <Routes>

        <Route path="/"  element={<Home />} />
        <Route path="/About"  element={ <About />} />
        <Route path="/Contact"  element={<Contact />} />
        <Route path="/Dashboard/Usesr-system" element={<UsersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  ) ; 
}
export default App ; 