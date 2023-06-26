import React from "react";

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="bg-green-300 inline-block m-2 p-3 rounded-md shadow-lg hover:scale-105 duration-300">
            <img src={`https://robohash.org/robot-${id}?200x200`} className="" alt="robot" />
            <div className="card flex flex-col items-center my-2 space-y-3">
                <h2 className="font-bold text-lg">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;