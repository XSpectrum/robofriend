import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <input type="text" onChange={searchChange} placeholder="Search robots..." className="border border-blue-400 p-3 bg-blue-100" />
    )
};

export default SearchBox;