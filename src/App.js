import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import FeaturesPage from './pages/featuresPage';



class App extends Component {
  render() {
    return (

      <div className="App">

      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='features' element={<FeaturesPage></FeaturesPage>}></Route>

        </Route>
      </Routes>


      </div>
    );
  }
}

export default App;
