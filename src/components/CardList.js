import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const { robots } = props;

    const cardComponent = robots.map(robot =>{
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    })
    return (
        <div className="flex flex-wrap justify-center">
            {cardComponent}
        </div>
    );
}

export default CardList;