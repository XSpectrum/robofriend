import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value,
        });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => {
            this.setState({
                robots: users
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length === 0 ){
            return (
                <div className='flex flex-col items-center'>
                    <h1>loading...</h1>
                </div>
            )
        }else{
            return (
                <div className='bg-blue-100 flex flex-col items-center'>
                    <h1 className="font-bold text-lg my-5 ">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <div className='my-5 h-1 w-full bg-gray-700'> </div>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
};

export default App;