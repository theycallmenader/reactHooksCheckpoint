import React from 'react'


const Filter = ({ title, rate }) => {
    return (
        <div className="filter">
            <div>
                <input
                    type="text"
                    placeholder="Search a movie"
                    className="searchbox"
                    onChange={(e) => title(e.target.value)}
                />
            </div>


        </div >

    )

};
export default Filter;