import React, { useState } from 'react';
import './Search.css';
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import Results from '../../components/Results/Results';
import Footer from '../../components/Footer/Footer';
import { color } from '../../data/data';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredColors = color.filter(item =>
    item.color.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <React.Fragment>
      <Navbar />
      <Input handleInputChange={handleInputChange}  />
      <Results colors={filteredColors} />
      <Footer />
    </React.Fragment>
  )
}

export default Search