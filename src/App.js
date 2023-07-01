import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import CardList from "./components/CardList";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    useEffect(() => {
        console.log("test");
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => {
            setRobots(users);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (robots.length === 0) ?
        <div className='flex flex-col items-center'>
            <h1>loading...</h1>
        </div> :
        <div className='bg-blue-100 flex flex-col items-center'>
            <h1 className="font-bold text-lg my-5 ">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <div className='my-5 h-1 w-full bg-gray-700'> </div>
            <CardList robots={filteredRobots} />
        </div>
}

export default App;