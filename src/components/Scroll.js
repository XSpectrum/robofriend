import React from "react";

const Scroll = (props) => {
    return (
        <div className="h-[500px] overflow-y-scroll">
            {props.children}
        </div>
    )
}

export default Scroll;