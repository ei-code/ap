import React, { Component } from "react";
import axios from "axios";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };
  }

  getPortfolioItems() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-color/3/")
      .then(response => {
        console.log(response)
      
      }); 
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return console.log(data)//<PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
      </div>
    );
  }
}

