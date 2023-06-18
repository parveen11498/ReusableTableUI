import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
  
 <BrowserRouter>
        {/* <Screen1 /> */}
        <Routes> 
     
         
                   <Route path='/screen2' element={<Screen2/>} />
                   <Route path='/screen1' element={<Screen1/>} />
        
                </Routes>
</BrowserRouter>

     
    </div>
  );
};

export default App;

