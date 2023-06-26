import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./components/CardList";
import { robots } from "./constants/robots";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value,
        });       
    } 

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }) 

        return (
            <div className='flex flex-col items-center'>
                <h1 className="font-bold text-lg my-5 ">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <div className='my-5 h-1 w-full bg-gray-700'> </div>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
};

export default App;