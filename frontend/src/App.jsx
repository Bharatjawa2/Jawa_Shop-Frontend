import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';
import Home from './pages/Home';
import Footer from './components/Footer';
import Listing from './pages/Listing';

const MyContext = createContext();

const App = () => {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    })
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  }
  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat/:id' exact={true} element={<Listing />} />
        </Routes>
      </MyContext.Provider>
      <Footer />
    </>
  );
};

export default App;
export { MyContext }
