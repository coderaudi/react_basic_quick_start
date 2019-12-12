import React from 'react';
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";

import MainApp from "./routes/index";
function App() {
  return (
    <div className="App">
      <Header />
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
