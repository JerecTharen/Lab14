import React, { Component } from 'react';
import './App.css';

//component imports
import Header from './Components/Header/Header';
import FeaturedHouse from './Components/FeaturedHouse/FeaturedHouse';
import HouseSearch from './Components/HouseSearch/HouseSearch';
import SearchTable from './Components/HouseSearch/SearchTable';
import House from './Components/FeaturedHouse/House';

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

    filterHouses = (country)=>{
        this.setState({activeHouse: null});
        const filterHouses = this.allHouses.filter((h)=> h.country === country);
        this.setState({filterHouses});
        this.setState({country});
    };

    setActiveHouse = (house)=>{
        this.setState({activeHouse: house});
    };


    render() {
        let activeComponent = null;
        if(this.state.country){
            // console.log(this.state.filteredHouses);
            activeComponent = <SearchTable country={this.state.country}
                filteredHouses={this.state.filterHouses} setActiveHouse={this.setActiveHouse} />;
        }
        if(this.state.activeHouse){
            activeComponent = <House h ouse={this.state.activeHouse} />;
        }
        if(!activeComponent){
            activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;
        }
    return (
      <div className="container">
        <Header subtitle='Providing houses all over the world' />
        <HouseSearch countries={this.state.countries} filterHouses={this.filterHouses} />
        {activeComponent}
      </div>
    );
  }
}

export default App;
