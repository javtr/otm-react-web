import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './components/container/home';


class App extends Component {
  render() {
    return (

      <div className="App">

      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>


        </Route>
      </Routes>


      </div>
    );
  }
}

export default App;
