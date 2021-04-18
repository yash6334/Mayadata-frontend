import React, { useState } from 'react'
import GridTable from '../components/HomePage/GridTable'
import SearchBar from '../components/HomePage/SearchBar'
import css from "./HomePage.css";

function HomePage() {
    const [searchText, setsearchText] = useState("")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")

    return (
        <div className="root">
            <h1 className="heading">My Meetings</h1>
            <SearchBar className="searchBar" setsearchText = {setsearchText} setendDate= {setendDate} setstartDate={setstartDate}/>
            <GridTable className="tableArea" searchText = {searchText} startDate={startDate} endDate={endDate}/>
        </div>
    )
}

export default HomePage
