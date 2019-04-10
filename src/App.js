import React, { Component } from 'react';
import './App.css';

//component imports
import Header from './Components/Header/Header';
import FeaturedHouse from './Components/FeaturedHouse/FeaturedHouse';
import HouseSearch from './Components/HouseSearch/HouseSearch';

class App extends Component {

    state = {
    };

    fetchHouses = ()=>{
        fetch('/houses.json')
            .then(resp => resp.json())
            .then(allHouses =>{
                this.allHouses = allHouses;
                this.determineFeaturedHouse();
                this.determineUniqueContries();
            })
    };

    determineFeaturedHouse = ()=>{
        if(this.allHouses){
            const randomIndex = Math.floor(Math.random()* this.allHouses.length);
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({featuredHouse});
        }
    };

    determineUniqueContries = ()=>{
        const countries = this.allHouses
            ? Array.from(new Set(this.allHouses.map(h => h.country)))
            : [];
        countries.unshift(null);
        this.setState({countries});
    };

    componentDidMount(){
        this.fetchHouses();
    }


    render() {
    return (
      <div className="container">
        <Header subtitle='Providing houses all over the world' />
        <HouseSearch countries={this.state.countries} />
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
