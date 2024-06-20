import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from "./pages";
import FormPayPage from "./pages/formpay";
import PaymentSuccess from "./pages/PaymentSuccess";



function App() {
  return (
    <Router>
      
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
        <Route path="/formpay" element={<FormPayPage/>} /> {/* Specify path */}
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
