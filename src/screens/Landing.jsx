import React from "react";
// // Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Schemes from "../components/Sections/Scheme";
import Blog from "../components/Sections/Blog";
import Team from "../components/Sections/Team";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Login from "../components/Sections/Login"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from ./Login

export default function Landing() {
  return (
    <>
    
      <TopNavbar />
      <Header />
      <Services />
      <Schemes />
      <Blog />
      <Team />
      <Contact />
      <Login />
      <Footer />
   
       </>
  );
}




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // import TopNavbar from './TopNavbar';
// // import Header from './Header';
// // import Services from './Services';
// // import Schemes from './Schemes';
// // import Blog from './Blog';
// // import Team from './Team';
// // import Contact from './Contact';
// // import Login from './Login';
// // import Footer from './Footer';

// function Landing() {
//   return (
//     <Router>
//       <>
//         <TopNavbar />
//         <Header />
//         <Services />
//         <Schemes />
//         <Blog />
//         <Team />
//         <Contact />
//         <Routes>
//           <Route path="/newpage" element={<Login />} />
//         </Routes>
//         <Login />
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default Landing;
