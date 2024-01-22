import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/global/layout/Layout";
import SignIn from "./features/TaxiDriver/pages/SignInPage";
import Home from "./features/travel/pages/TravelsPage";
// import {  ThemeProvider }from "styled-components"

function App() {
  // const theme = {
  //   colors:{
  //     header:"#1976d2",
  //     body:"",
  //     footer:""
  //   }
  // }

  return <Home />;
  //   return (
  //     <>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route element={<Layout />}>
  //             <Route path="/" element={<SignIn />} />
  //             <Route path="/home" element={<Home />} />
  //             {/* <Route path="/register" element={<Register />} /> */}
  //           </Route>
  //         </Routes>
  //       </BrowserRouter>
  //     </>
  //   );
}

export default App;
