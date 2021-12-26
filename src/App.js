import './App.css';
import Users from './profile/Component/Users';
import React from "react";

import PropTypes from "prop-types";

function App() {

  const inlineStyling = {color: "blue", textAlign:"center"}

  const Data = [
    {
      fullName:"nadim",
      profession:"Formateur",
      bio:"ABC", 
    },
    {
      fullName:"amine",
      profession:"Ingénieur Test embarqué",
      bio:"abc", 
    },
    {
      fullName:"lina",
      profession:"Ingénieur",
      bio:"Xxx", 
    }
  ];
  
  return (
    <div style={inlineStyling} className="container">
      <Users UsersData={Data} title="List of Users" />
    </div>
  );
}

export default App;