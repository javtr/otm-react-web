import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import FeaturesPage from './pages/featuresPage';
import BuyPage from './pages/buyPage';
import ExamplePage from './pages/examplePage';
import ContactForm from './components/pure/form/contactForm';
import CompPrueba from './components/pure/form/compPrueba';
import Order from './pages/order';



class App extends Component {
  render() {
    return (

      <div className="App">

      <Routes>

        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='features' element={<FeaturesPage></FeaturesPage>}></Route>
          <Route path='buy' element={<BuyPage></BuyPage>}></Route>
          <Route path='example' element={<ExamplePage></ExamplePage>}></Route>
          <Route path='contact' element={<ContactForm></ContactForm>}></Route>
          <Route path='contact2' element={<CompPrueba></CompPrueba>}></Route>
        </Route>
        <Route path='/order/:id' element={<Order></Order>}></Route>
        
      </Routes>


      </div>
    );
  }
}

export default App;
