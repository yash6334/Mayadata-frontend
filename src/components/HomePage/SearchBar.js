import React from 'react'
import css from './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="searchBar">
            <div>
                <input placeholder="Search" id="search" onChange={(e)=> props.setsearchText(e.target.value)}></input>
            </div>
            <div>
                From:<input type="date" placeholder="dd/mm/yy" id="from" onChange={(e)=> props.setstartDate(e.target.value)}></input>
            </div>
            <div>
                To:<input type="date" placeholder="dd/mm/yy" id="to" onChange={(e)=> props.setendDate(e.target.value)}></input>
            </div>
        </div>
    )
}

export default SearchBar
